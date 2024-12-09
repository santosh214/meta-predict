import React, { useEffect, useState } from 'react'
import dataItemUp from '../../assets/json-data/data-itemup'
import { arrowUp } from '../../assets/images'
import {predictContractInstByAddrContractAbi, prediction} from '../contract/prediction'

import { ethers } from 'ethers'
import { useConnectWallet } from '@web3-onboard/react'
import { toast } from 'react-toastify'
const LeftBox = ({amount, setAmount}) => {
    // console.log("🚀 ~ LeftBox ~ amount:", amount)
    const [loader, setloader] = useState(false);
    const [downLoader, setDownLoader] = useState(false);
    const [{ wallet }] = useConnectWallet();
    const [upBetGroupData, setUpBetGroupData] = useState([]); // Store up bet group data

    const [poolStatus, setPoolStatus] = useState({
      status: "",
      time: "",
      event: "",
      finalPrice: "",
      initialPrice: "",
    });
    
    const handleUp = async (direction=true) => {
      if(!wallet?.accounts[0].address){
          return toast.error("Connect wallet first")
      }
        // console.log("🚀 ~ handleUp ~ direction:", direction)
        try {
          if(direction){
    
            setloader(true);
          }
          if(!direction){
            setDownLoader(true)
          }
          const userTrade = {
            poolId: "0x123abc",
            countryCode: "US",
            upOrDown: direction,
          };
          const contractInst = await prediction(wallet?.provider);
          let makeTrade = await contractInst.makeTrade(userTrade, {
            value: ethers.utils.parseEther(amount.toString()),
          });
          let wait = await makeTrade.wait();
          if (wait) {
            setloader(false);
            setDownLoader(false)
            handlePools();
            toast.success("Bet done successfully.");
          }
        } catch (error) {
          console.log("🚀 ~ handleUp ~ error:", error)
          const msg = JSON.stringify(error);
          const msgParse = JSON.parse(msg);
          // console.log("🚀 ~ handleUp ~ msgParse:", msgParse);
          setloader(false);
          setDownLoader(false)
    
          // toast.error("Transaction failed");
          if (msgParse?.reason) {
            toast.error(msgParse?.reason);
          }
        }
      };
     

      useEffect(() => {
        const socket = new WebSocket("https://socket.metapredict.io/");
        const socket2 = new WebSocket("https://socket.metapredict.io/trade");

        socket.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          setPoolStatus({ ...parsedData });
        };
        socket2.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          console.log("🚀 ~ useEffect ~ parsedData:", parsedData)
          if(parsedData?.data?.upSideUsers){
            setUpBetGroupData(parsedData?.data?.upSideUsers )
          }
        };
    
        return () => {
          socket.close();
          socket2.close()
        };
      }, []);
      const timeInMinutes = parseInt(poolStatus?.time?.split(":")[1]?.split(" ")[0]);
      const timeLeft =poolStatus.status === "Betting Started"? Math.max(0, timeInMinutes - 5):0; // Ensure time doesn't go negative
      // Disable the button if timeLeft is 0 or betting is not started
      const isBettingAllowed = poolStatus.status === "Betting Started" && timeLeft > 0;
    

    return (
        <>
            <div className="pool_side up" disabled>
                <div className="pool">
                    <div className="pool_header">
                        <div className="title">Up pool Treasury</div>
                        <div className="pool_size up" >
                            <div className="amount amount_green" >
                                {/* <div className="icon-matic" >
                                </div> */}
                                -
                            </div>
                        </div>
                        <div className="player_num">
                            <div className="det_title">PLAYERS</div>{upBetGroupData?.length}
                        </div>
                    </div>
                    <div className="players" side="up">
                        <div className="scroll">
                        {upBetGroupData?.length > 0
                        ? upBetGroupData.map((address) => (
                            <div className="avatar-container" key={address}>
                              {console.log("aa",address)}
                              <img
                                src={address?.avatarUrl}
                                alt="User Avatar"
                                className="avatar"
                              />
                              {/* <span>{shortddres(address)}</span> */}
                            </div>
                          ))
                        : ""}
                            {/* {
                                dataItemUp.map((upBox =>
                                    <div className="player_position" key={upBox.id} >
                                        <img className="user_avatar" src={upBox.img} alt='avatar' />
                                        <div className="country">
                                            <img src={upBox.imgFlag} alt='flage' /></div>
                                        <div className="invest">
                                            <div className="icon-matic" >
                                                <span ><i className={upBox.icon}></i></span>
                                            </div>
                                            {upBox.productId}
                                        </div>
                                    </div>

                                ))
                            } */}


                        </div>
                    </div>
                </div>
              
              {/* Pool Up Button  */}
              <button className="trade_btn" onClick={handleUp} disabled={loader || !isBettingAllowed} >
                <div className="fill">
                    <img src={arrowUp} alt="arrow btn" />
                </div>
                <div className="hold_tooltip"></div>
            </button>
              {/* <PoolUpButton   /> */}
            </div>
        </>
    )
}

export default LeftBox