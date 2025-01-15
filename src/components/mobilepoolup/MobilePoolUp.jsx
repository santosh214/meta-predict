import React, { useEffect, useState } from 'react'
import { convertToBigInt, convertTowei } from '../../utils/utils';

const MobilePoolUp = () => {
  const [upBetGroupData, setUpBetGroupData] = useState([]); // Store up bet group data
  const [totalPoolamount, setTotalPoolAmount] = useState(0);


  useEffect(() => {
    const socket2 = new WebSocket("https://socket.metapredict.io/trade");
    socket2.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData?.data?.upSideUsers) {
        setUpBetGroupData(parsedData?.data?.upSideUsers)
        const totalWei = parsedData?.data?.upSideUsers.reduce((sum, user) => {
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
      socket2.close()
    };
  }, []);

  return (
    <>
      <div className="pools_side mobile_up">
        <div className="pool_top_up">
          <p className="pool_return_amt_up"></p>
          <div className="pool_players ">
            <span className="pool_players_amt">{upBetGroupData?.length}</span>
            <p className="players">PLAYERS</p>
            <h1 className='ms-3 amount_green'>{totalPoolamount} </h1>
          </div>
        </div>

        <div className='trade_bets_mobile'>

          {upBetGroupData?.length > 0
            ? upBetGroupData.map((address, index) => (
              <div className="avatar-container d-grid m-1 " style={{ justifyItems: 'center' }} key={index}>
                {console.log("aa", address)}
                <img
                  src={address?.avatarUrl}
                  alt="User Avatar"
                  className="avatar m-0"
                  title={address?.randomName}
                />
                {console.log("addd", address?.amount)}
                <span className=''>{convertTowei(address?.amount)}</span>
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