import React from 'react'
import Timer from './Timer'

const MobileHeaderPool = ({ poolStatus }) => {
  
  return (
    <>
      <div className="header_pools_details">
        <div className="position_timer" tradephase="open">
          <Timer poolStatus={poolStatus} isMobile={true} />
          
          <h3 className="m-0 p-0">{poolStatus.status}</h3>

        </div>
        <div className="up_pool">
          {/* <p>UP POOL PAYOUT</p>
                        <p>20.4<span>(0.0)</span></p>
                        <p>204%</p> */}
          <p className="m-0 p-0">INITIAL PRICE</p>
          <h1 className="up" >{poolStatus.initialPrice}</h1>
        </div>
        <div className="down_pool">
        <p className="m-0 p-0">FINAL PRICE</p>
        <h1 className="down" >{poolStatus.finalPrice}</h1>
          {/* <p>DOWN POOL PAYOUT</p>
          <p>17.7<span>(0.0)</span></p>
          <p>177%</p> */}
        </div>
      </div>
    </>
  )
}

export default MobileHeaderPool;