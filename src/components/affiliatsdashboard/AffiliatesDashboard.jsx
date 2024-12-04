import React from 'react'
import { coinImg, stackCoin } from '../../assets/images'
import HeaderIcon from '../reuseicon/HeaderIcon'
import affilatesDashboad from '../../assets/json-data/data-affilatedashboard'
const AffiliatesDashboard = () => {
  return (
    <>
       <div className="page affiliate_dashboard_page affiliate_page mobileview">
         <HeaderIcon title={"REFERRAL PROGRAM DASHBOARD"}/>

       <div className="totals">
            <div className="total_block today"><img className="icon" src={coinImg} alt='coin '/>
                <div className="amount">
                    <div className="icon-matic"></div>0.000
                </div>
                <div className="title">Earned Today</div>
            </div>
            <div className="total_block today"><img className="icon" src={stackCoin} alt='stackCoin'/>
                <div className="amount">
                    <div className="icon-matic"></div>0.000
                </div>
                <div className="title">Total Earnings (Paid)</div>
            </div>
        </div>
        <div className="tiers">
          {
            affilatesDashboad.map((data =>
                <div className="tier_block tier1" key={data.id}>
                <img className="icon" src={data.Img} alt='Group Tier'/>
                <div className="title">{data.title}</div>
                <div className="stats">
                    <div className="stat_block today">
                        <div className="people"></div>
                        <div className="amount">
                            <div className="icon-matic"></div> {data.value}
                        </div>
                        <div className="text">{data.day}</div>
                    </div>
                    <div className="stat_block past">
                        <div className="people"></div>
                        <div className="amount">
                            <div className="icon-matic"></div>{data.totalValue}
                        </div>
                    <div className="text">{data.total}</div>
                </div>
            </div>
        </div>
            ))
          }
    
    </div>
       </div>
    </>
  )
}

export default AffiliatesDashboard