import React, { useEffect, useState } from 'react'
import dataItemDown from '../../assets/json-data/data-itemdown'
import { arrowUp } from '../../assets/images'
import { useConnectWallet } from '@web3-onboard/react'
import {predictContractInstByAddrContractAbi, prediction} from '../contract/prediction'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { convertToBigInt, convertTowei } from '../../utils/utils'




const RightBox = ({amount, setAmount}) => {
  // console.log("🚀 ~ RightBox ~ amount:", amount)

  const [downLoader, setDownLoader] = useState(false);
  const [{ wallet }] = useConnectWallet();
  const [downBetGroupData, setDownBetGroupData] = useState([]); // Store down bet group data
  const [totalPoolamount,setTotalPoolAmount]=useState(0);
  const [poolStatus, setPoolStatus] = useState({
    status: "",
    time: "",
    event: "",
    finalPrice: "",
    initialPrice: "",
  });
  // console.log("🚀 ~ RightBox ~ poolStatus:", poolStatus)

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
        const socket2 = new WebSocket("https://socket.metapredict.io/trade");

        socket.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          setPoolStatus({ ...parsedData });
        };
        socket2.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          if(parsedData?.data?.downSideUsers){
            setDownBetGroupData(parsedData?.data?.downSideUsers )
            
            // Calculate total in Wei
            const totalWei = parsedData?.data?.downSideUsers.reduce((sum, user) => {
              return sum + convertToBigInt(user.amount);
            }, BigInt(0));
            
            // Convert Wei to Ether (1 Ether = 10^18 Wei)
            const totalEther = Number(totalWei) / 1e18;
            
            // Format to 0.2 decimal format
            const formattedTotal = totalEther.toFixed(1);
            
            setTotalPoolAmount(formattedTotal)
          }
        };
    
        return () => {
          socket.close();
          socket2.close();
        };
      }, []);  
          const timeInMinutes = parseInt(poolStatus?.time?.split(":")[1]?.split(" ")[0]);
      const timeLeft =poolStatus.status === "Betting Started"? Math.max(0, timeInMinutes - 5):0; // Ensure time doesn't go negative
      // Disable the button if timeLeft is 0 or betting is not started
      const isBettingAllowed = poolStatus.status === "Betting Started" && timeLeft > 0;

  return (
    <>
       <div className="pool_side down" disabled>
                <div className="pool">
                <div className="pool_header">
                        <div className="title">DOWN POOL TREASURY</div>
                            <div className="player_num">
                                <div className="det_title">PLAYERS</div>{downBetGroupData?.length}
                            </div>
                        <div className="pool_size down">
                                <div className="amount amount_red"   >
                                    <div className="icon-matic"></div>
                                    {/* 110.0 */}
                                    {totalPoolamount ?? '011'}
                                </div>
                        </div>
                    </div>
                    <div className="players" side="down">
                        <div className="scroll">
                        {downBetGroupData?.length > 0
                        ? downBetGroupData.map((address,index) => (
                          <div className="avatar-container d-grid m-1 " style={{justifyItems:'center'}} key={index}>
                          <img
                            src={address?.avatarUrl}
                            alt="User Avatar"
                            className="avatar m-0"
                            title={address?.randomName}
                          />
                          <span className=''>{convertTowei(address?.amount)}</span>
                        </div>
                          ))
                        : ""}
                            {/* {
                                dataItemDown.map((upBox =>
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
               
               {/* Pool Down Button  */}
               <button className="trade_btn"  onClick={handleUp} disabled={downLoader|| !isBettingAllowed}>
                <div className="fill">
                    <img src={arrowUp} alt="arrow btn" />
                </div>
                <div className="hold_tooltip"></div>
            </button>
{/* 
               <PoolDownButton/> */}
            </div>
    </>
  )
}

export default RightBox