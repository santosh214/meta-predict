import React, { useEffect, useState } from 'react'
import './poolsReturn.css'
import { convertToBigInt, convertTowei } from '../../utils/utils';

const MobilePoolDown = () => {
  const [downBetGroupData, setDownBetGroupData] = useState([]); // Store down bet group data
  const [totalPoolamount, setTotalPoolAmount] = useState(0);


  useEffect(() => {
    const socket2 = new WebSocket("https://socket.metapredict.io/trade");

    socket2.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData?.data?.downSideUsers) {
        setDownBetGroupData(parsedData?.data?.downSideUsers)
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
      socket2.close();
    };
  }, []);

  return (
    <>
      <div className="pools_side mobile_down">
        <div className="pool_top_down">
          <p className="pool_return_amt_down"></p>
          <div className="pool_players">
            <span className="pool_players_amt">{downBetGroupData?.length}</span>
            <p className="players">PLAYERS</p>
            <h1 className='ms-3 amount_green'> {totalPoolamount}</h1>

          </div>
        </div>
        {downBetGroupData && (
          <div className="trade_bets_mobile"  >
            {downBetGroupData?.length > 0
              ? downBetGroupData.map((address, index) => (
                <div className="avatar-container d-grid m-1 " style={{ justifyItems: 'center' }} key={index}>
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