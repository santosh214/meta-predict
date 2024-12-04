import React from 'react'
import { Link } from 'react-router-dom'
import '../affiliateleaderboard/affiliateleaderboard.css'
import HeaderIcon from '../reuseicon/HeaderIcon'
import dataAffiliateLead from '../../assets/json-data/data-affiliatelead'

const AffiliateLeaderboard = () => {
    return (
        <>
            <div className="page affiliate_leaderboard affiliate_lead mobileview">

            <div className="aff_leaderboard_header">
            <HeaderIcon title={"AFFILIATE LEADERBOARD"}/>
        <div className="aff_leaderboard_current_filter">
            <p>All time</p>
            <div className="arr" dropdown="close"></div>
        </div><Link className="aff_leaderboard_aff_btn" to={"/"}>
            <p>Become an Affiliate</p>
        </Link>
    </div>
    <div className="aff_leaderboard_content">
        <div className="aff_leaderboard_table_header">
            <div>
                <p>#</p>
            </div>
            <div>
                <p></p>
                <p>ADDRESS</p>
            </div>
            <div>
                <p>TIER 1</p>
            </div>
            <div>
                <p>TIER 2</p>
            </div>
            <div>
                <p>TIER 3</p>
            </div>
            <div>
                <p>TOTAL PAID AMOUNT</p>
            </div>
        </div>
        <div className="aff_leaderboard_content_list">
            {
                dataAffiliateLead.map((row =>
                    <div className="aff_leaderboard_content_list_row" key={row.id}>
                    <div>
                        <p>{row.id}</p>
                    </div>
                    <div>
                        <p><img src={row.img} alt='avatar'/>
                        <div className="country_flag">
                        <img src={row.imgFlag} alt='Flag'/>
                        </div>
                        </p><Link to={"/"}>{row.address}</Link>
                    </div>
                    <div>
                        <p className='tier_1'>{row.tier1}</p>
                    </div>
                    <div>
                        <p className='tier_2'>{row.tier2}</p>
                    </div>
                    <div>
                        <p className='tier_3'>{row.tier3}</p>
                    </div>
                    <div>
                        <p className='totla_amount'>{row.totalAmount}</p>
                    </div>
                </div>
                ))
            }
          
            </div>
        </div>
           </div>
        </>
    )
}

export default AffiliateLeaderboard;