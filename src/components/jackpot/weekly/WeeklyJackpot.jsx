import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { menuIcon } from '../../../assets/images'
import { dataWeekly } from '../../../assets/json-data/data-jackpot'
import { SidebarContext } from '../../sidebar/SidebarContext'
import '../../jackpot/weekly/weeklyjackpot.css'
import JackpotTimer from '../JackpotTimer'

const WeeklyJackpot = () => {
    const { toggleSidebar } = useContext(SidebarContext);
    const { image } = useContext(SidebarContext);
    return (
        <>
            <div className="page weekly_jackpot_page weekly_jackpot weekly_page mobileview">
                <div className="weekly-jackpot-header">
                    <div className="header-top">
                        <Link className="back_btn" to={"/"}></Link>
                        <div className="header-links">
                            <Link className="header-link faq" to={"/faq"}>
                                <div className="image"></div>
                                <div className="text"><span>FAQ</span>
                                </div>
                            </Link>
                            <Link className="header-link history" to={"/historywinner"}>
                                <div className="image"></div>
                                <div className="text"><span>History</span>
                                </div>
                            </Link>
                        </div>
                        <div className="jackpot-page-title"><span>Weekly Jackpot</span></div>
                        <Link className="monthly-jackpot-button" to={"/monthlyjackpot"}></Link>
                        <button className="menu_btn" onClick={toggleSidebar}>
                            <img src={menuIcon} alt='Menu Icon' />
                        </button>
                    </div>
                    <div className="header-bottom">
                        <div className="header-bottom-left">
                            <div className="player-avatar">
                                <img src={image} alt="Profile" className="profile-image" />
                            </div>
                            <div className="player-weekly-status">
                                <div className="trades-meter">
                                    <div className="images">
                                        <div className="image progressing image-5"></div>
                                        <div className="image progressing image-4"></div>
                                        <div className="image progressing image-3"></div>
                                        <div className="image progressing image-2"></div>
                                        <div className="image progressing image-1"></div>
                                    </div>
                                    <div className="bars">
                                        <div className="bar progressing bar-5">
                                            <div className="fill" ></div>
                                        </div>
                                        <div className="bar progressing bar-4">
                                            <div className="fill" ></div>
                                        </div>
                                        <div className="bar progressing bar-3">
                                            <div className="fill" ></div>
                                        </div>
                                        <div className="bar progressing bar-2">
                                            <div className="fill" ></div>
                                        </div>
                                        <div className="bar progressing bar-1">
                                            <div className="fill" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title"><span>Your Weekly Jackpot Status</span></div>
                            </div>
                        </div>
                        <div className="trades-wallet-timer-wrap">
                            <div className="player-weekly-trades">
                                <div className="amount"><span><text >0</text></span></div>
                                <div className="title"><span>Your Weekly Trades</span></div>
                            </div>
                            <div className="jackpot-wallet">
                                <div className="wallet-address"><span>
                                    <Link to={"/"} target="_blank">0x0D9ccD77...a74E289468</Link></span>
                                </div>
                                <div className="title"><span>Jackpot Wallet</span></div>
                            </div>
                            <div className="jackpot-timer">
                                <div className="timer-wrap">
                                    <div className="hours">
                                        <JackpotTimer/>
                                    </div>
                                </div>
                                <div className="title"><span>Ending in</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rows-wrap">
                    {
                        dataWeekly.map((item =>
                            <div className="row-wrap" key={item.id}>
                                <div className="row-top">
                                    <div className="condition">
                                        <div className="content">
                                            <div className="title"><span>{item.title}</span></div>
                                            <div className="amount"><span>{item.ammount}</span></div>
                                        </div>
                                        <div className="weekly-trades">
                                            <div className="blank"></div>
                                            <div className="text"><span>{item.text}</span></div>
                                        </div>
                                    </div>
                                    <div className="participate"><span>{item.participate}</span> <span className="amount">{item.ammount}</span>
                                        <span>{item.textTrade}</span>
                                    </div>
                                    <div className="players">
                                        <div className="title"><span>{item.playerTitle}</span></div>
                                        <div className="amount"><span>{item.playerAmount}</span></div>
                                    </div>
                                    <div className="prize">
                                        <div className="title"><span>{item.prizeTitle}</span></div>
                                        <div className="amount">
                                            <div className="icon-matic"></div><span><text>{item.iconMaticText}</text></span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="expansion" >
                <div className="expansion-header">
                    <div className="number"><span>#</span></div>
                    <div className="player"><span>Player</span></div>
                    <div className="wallet"><span>Wallet</span></div>
                    <div className="cards"><span>TRADES</span></div>
                </div>
                <div className="expansion-body">
                    {
                        dataWeekly.dataSubWeekly.map((accodion =>{
                            <div className="expansion-row" key={accodion.id}>
                        <div className="number"><span>{accodion.number}</span></div>
                        <div className="player">
                        <img src={accodion.img} alt='avatar'/>
                        </div>
                        <div className="wallet"><Link to={"/"}
                            target="_blank"><span>{accodion.wallet}</span></Link></div>
                        <div className="cards"><span>{accodion.cards}</span></div>
                    </div>  
                        }))
                    }              
                </div>
            </div> */}
                            </div>
                        ))
                    }

                    <div className="bottom-nav">
                        <div className="bottom-nav-links header-links">
                            <Link className="bottom-nav-link header-link faq" to={"/faq"}>
                                <div className="image"></div>
                                <div className="text"><span>FAQ</span></div>
                            </Link>
                            <Link className="bottom-nav-link header-link monthly-jackpot" to={"/monthly_jackpot"}></Link>
                            <Link className="bottom-nav-link header-link history" to={"/jackpot_winners"}>
                                <div className="image"></div>
                                <div className="text"><span>History</span></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeeklyJackpot