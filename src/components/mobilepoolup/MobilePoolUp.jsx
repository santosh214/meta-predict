import React, { useContext, useEffect, useState } from 'react'
import { poolMobile } from '../../assets/json-data/data-itemdown'
import { SidebarContext } from '../sidebar/SidebarContext';
import { predictContractInstByAddrContractAbi, prediction } from '../contract/prediction';
import { ethers } from 'ethers';
import { useConnectWallet } from '@web3-onboard/react';

const MobilePoolUp = () => {
  const [{ wallet }] = useConnectWallet();

  const { showmobilepool } = useContext(SidebarContext);

  const [upBetGroupData, setUpBetGroupData] = useState([]); // Store up bet group data


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
        setUpBetGroupData(upBetGroup?.addresses);
      } catch (error) {
        console.error("Error fetching pools data:", error);
      }
    }
  };
  useEffect(() => {
    const providerUrl = "https://testnet.ozonescan.org/rpc"; // Example: Infura, Alchemy
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    // Replace with your contract's ABI and address
    const contractAddress = import.meta.env.VITE_APP_PREDICTION_ADDRESS;
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
      <div className="pools_side mobile_up">
        <div className="pool_top_up">
          <p className="pool_return_amt_up"></p>
          <div className="pool_players">
            <span className="pool_players_amt">{upBetGroupData?.length}</span>
            <p className="players">PLAYERS</p></div></div>
        <div className='trade_bets_mobile'>

          {upBetGroupData?.length > 0
            ? upBetGroupData.map((address) => (
              <div className="trade_taken_bet_mobile_up" key={address}>
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="user_avatar"
                />
                {/* <span>{shortddres(address)}</span> */}
              </div>
            ))
            : ""}
        </div>
        {/* {showmobilepool && (
          <div className="trade_bets_mobile"  >
            {
              poolMobile.map((pools =>
                <div className="trade_taken_bet_mobile_up" key={pools.id} >
                  <img src={pools.img} className="user_avatar" />
                </div>
              ))
            }
          </div>
        )} */}
      </div >
    </>
  )
}

export default MobilePoolUp