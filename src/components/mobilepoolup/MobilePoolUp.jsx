import React, {  useEffect, useState } from 'react'

const MobilePoolUp = () => {
  const [upBetGroupData, setUpBetGroupData] = useState([]); // Store up bet group data


  useEffect(() => {
    const socket2 = new WebSocket("https://socket.metapredict.io/trade");
    socket2.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if(parsedData?.data?.upSideUsers){
        setUpBetGroupData(parsedData?.data?.upSideUsers )
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
          <div className="pool_players">
            <span className="pool_players_amt">{upBetGroupData?.length}</span>
            <p className="players">PLAYERS</p></div></div>
        <div className='trade_bets_mobile'>

          {upBetGroupData?.length > 0
            ? upBetGroupData.map((address) => (
              <div className="trade_taken_bet_mobile_up" key={address}>
                <img
                  src={address?.avatarUrl}
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