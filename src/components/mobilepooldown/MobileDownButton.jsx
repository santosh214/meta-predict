import React, { useEffect, useState } from 'react'
import { arrowUp } from '../../assets/images'
import { useConnectWallet } from '@web3-onboard/react';
import { prediction } from '../contract/prediction';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
const MobileDownButton = ({ togglePopup,amount }) => {


    const [downLoader, setDownLoader] = useState(false);
    const [{ wallet }] = useConnectWallet();
    const [poolStatus, setPoolStatus] = useState({
      status: "",
      time: "",
      event: "",
      finalPrice: "",
      initialPrice: "",
    });

    const handleUp = async () => {
        if(!wallet?.accounts[0].address){
            return toast.error("Connect wallet first")
        }
          try {
          
              setDownLoader(true)
            const userTrade = {
              poolId: "0x123abc",
              countryCode: "US",
              upOrDown: false,
            };
            const contractInst = await prediction(wallet?.provider);
            let makeTrade = await contractInst.makeTrade(userTrade, {
              value: ethers.utils.parseEther(amount.toString()),
            });
            let wait = await makeTrade.wait();
            if (wait) {
              setDownLoader(false)
              // handlePools();
              toast.success("Bet done successfully.");
            }
          } catch (error) {
            console.log("🚀 ~ handleUp ~ error:", error)
            const msg = JSON.stringify(error);
            const msgParse = JSON.parse(msg);
            // console.log("🚀 ~ handleUp ~ msgParse:", msgParse);
            setDownLoader(false)
      
            // toast.error("Transaction failed");
            if (msgParse?.reason) {
              toast.error(msgParse?.reason);
            }
          }
        };


        useEffect(() => {
          const socket = new WebSocket("https://socket.metapredict.io/");
          socket.onmessage = (event) => {
            const parsedData = JSON.parse(event.data);
            setPoolStatus({ ...parsedData });
          };
      
          return () => {
            socket.close();
          };
        }, []);





        const timeInMinutes = parseInt(poolStatus?.time?.split(":")[1]?.split(" ")[0]);
        const timeLeft =poolStatus.status === "Betting Started"? Math.max(0, timeInMinutes - 5):0; // Ensure time doesn't go negative
        // Disable the button if timeLeft is 0 or betting is not started
        const isBettingAllowed = poolStatus.status === "Betting Started" && timeLeft > 0;
      
    return (
        <>
            <div className="pool_side downmobile_down">
              
                <button className="trade_btn_down" onClick={handleUp} disabled={downLoader||!isBettingAllowed}>
                    <div className="fill">
                    <img src={arrowUp} alt="arrow btn" />
                        </div>
                    <div className="hold_tooltip"></div>
                </button>
            </div>
        </>
    )
}

export default MobileDownButton