import React, {useContext, useEffect, useState} from 'react'
import { poolMobile } from '../../assets/json-data/data-itemdown'
import { SidebarContext } from '../sidebar/SidebarContext';

import './poolsReturn.css'
import { predictContractInstByAddrContractAbi, prediction } from '../contract/prediction';
import { useConnectWallet } from '@web3-onboard/react';
import { ethers } from 'ethers';
const MobilePoolDown = () => {
  const { showmobilepool } = useContext(SidebarContext);
  const [downBetGroupData, setDownBetGroupData] = useState([]); // Store down bet group data
  const [{ wallet }] = useConnectWallet();


  const handlePools = async () => {
    if (wallet) {
      try {
        // Call the 'pools' function of the contract
        const contractInst = await prediction(wallet?.provider);
        const poolsData = await contractInst.pools("0x123abc"); // Pass appropriate bytes value or address
        // Pools data is an array of the outputs from the pools function
        const [
          downBetGroup,
        ] = poolsData;
        // console.log("Round Start Time:", new Date(roundStartTime * 1000).toLocaleString()); // Convert timestamp to readable format
        setDownBetGroupData(downBetGroup?.addresses);
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
      }, 8000);
    });

    return () => {
      contract.removeAllListeners();
    };
  }, [wallet]);

  return (
    <>
      <div className="pools_side mobile_down">
        <div className="pool_top_down">
          <p className="pool_return_amt_down"></p>
          <div className="pool_players">
            <span className="pool_players_amt">{downBetGroupData?.length}</span>
            <p className="players">PLAYERS</p>
          </div>
        </div>
        {downBetGroupData && (
        <div className="trade_bets_mobile"  >
          {downBetGroupData?.length > 0
                        ? downBetGroupData.map((address) => (
                            <div className="trade_taken_bet_mobile_down" key={address}>
                              <img
                                src="https://via.placeholder.com/40"
                                alt="User Avatar"
                                className="user_avatar"
                              />
                              {/* <span>{shortddres(address)}</span> */}
                            </div>
                          ))
                        : ""}
          {/* {
            poolMobile.map((pools =>
              <div className="trade_taken_bet_mobile_down" key={pools.id} >
                <img src={pools.img} className="user_avatar" />
              </div>
            ))
          } */}
        </div>
    )}
      </div >

    </>
  )
}

export default MobilePoolDown;