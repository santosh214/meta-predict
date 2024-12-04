import React, { useEffect, useState } from 'react'
import dataItemDown from '../../assets/json-data/data-itemdown'
import { arrowUp } from '../../assets/images'
import { useConnectWallet } from '@web3-onboard/react'
import {predictContractInstByAddrContractAbi, prediction} from '../contract/prediction'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'




const RightBox = ({amount, setAmount}) => {
  // console.log("🚀 ~ RightBox ~ amount:", amount)

  const [downLoader, setDownLoader] = useState(false);
  const [{ wallet }] = useConnectWallet();
  const [downBetGroupData, setDownBetGroupData] = useState([]); // Store down bet group data
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
          handlePools();
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

    const handlePools = async () => {
        if (wallet) {
          try {
            // Call the 'pools' function of the contract
            const contractInst = await prediction(wallet?.provider);
            const poolsData = await contractInst.pools("0x123abc"); // Pass appropriate bytes value or address
            // Pools data is an array of the outputs from the pools function
            const [
              created,
              startPrice,
              endPrice,
              minBetAmount,
              maxBetAmount,
              poolBetsLimit,
              upBetGroup,
              downBetGroup,
              roundStartTime,
            ] = poolsData;
            // console.log("Round Start Time:", new Date(roundStartTime * 1000).toLocaleString()); // Convert timestamp to readable format
            setDownBetGroupData(downBetGroup?.addresses);
            console.log("🚀 ~ handlePools ~ downBetGroup?.addresses:", downBetGroup?.addresses)
          } catch (error) {
            console.error("Error fetching pools data:", error);
          }
        }
      };
      useEffect(() => {
        const providerUrl = "https://testnet.ozonescan.org/rpc"; // Example: Infura, Alchemy
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);
        // Replace with your contract's ABI and address
        const contractAddress =import.meta.env.VITE_APP_PREDICTION_ADDRESS;
        const contract = new ethers.Contract(
          contractAddress,
          predictContractInstByAddrContractAbi,
          provider
        );
        contract.on("TradePlaced", (poolId) => {
          // console.log("TradePlaced event detected:");
          // console.log("Pool ID:", poolId);
          setTimeout(() => {
            handlePools();
          }, 5000);
        });
    
        return () => {
          contract.removeAllListeners();
        };
      }, [wallet]);

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
                                    -
                                </div>
                        </div>
                    </div>
                    <div className="players" side="down">
                        <div className="scroll">
                        {downBetGroupData?.length > 0
                        ? downBetGroupData.map((address) => (
                            <div className="avatar-container" key={address}>
                              <img
                                src="https://via.placeholder.com/40"
                                alt="User Avatar"
                                className="avatar"
                              />
                              {/* <span>{shortddres(address)}</span> */}
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