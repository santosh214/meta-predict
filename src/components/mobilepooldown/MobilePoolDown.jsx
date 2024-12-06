import React, { useEffect, useState} from 'react'
import './poolsReturn.css'

const MobilePoolDown = () => {
  const [downBetGroupData, setDownBetGroupData] = useState([]); // Store down bet group data


  useEffect(() => {
    const socket2 = new WebSocket("https://socket.metapredict.io/trade");

    socket2.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if(parsedData?.data?.downSideUsers){
        setDownBetGroupData(parsedData?.data?.downSideUsers )
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