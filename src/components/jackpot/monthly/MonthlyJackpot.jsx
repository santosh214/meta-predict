import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { menuIcon } from '../../../assets/images'
import '../../jackpot/monthly/monthlyjackpot.css'
import { dataMonthly } from '../../../assets/json-data/data-jackpot'
import { SidebarContext } from '../../sidebar/SidebarContext'
import JackpotTimer from '../JackpotTimer'

const MonthlyJackpot = () => {
    const { toggleSidebar } = useContext(SidebarContext);
    const { image } = useContext(SidebarContext);
    return (
        <>
            <div className="page monthly_jackpot_page monthly_jackpot mobileview">
                <div className="monthly-jackpot-header">
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
                        <div className="jackpot-page-title"><span>Monthly Jackpot</span></div>
                        <Link className="weekly-jackpot-button" to={"/weeklyjackpot"}></Link>
                        <button className="menu_btn" onClick={toggleSidebar}>
                            <img src={menuIcon} alt='menu icon' />
                        </button>
                    </div>
                    <div className="header-bottom">
                        <div className="header-bottom-left">
                            <div className="player-avatar">
                                <img src={image} alt='avatart' />
                            </div>
                            <div className="player-monthly-status">
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
                                <div className="title"><span>You Have 0 Tickets</span></div>
                            </div>
                        </div>
                        <div className="trades-wallet-timer-wrap">
                            <div className="player-monthly-trades">
                                <div className="amount"><span>0</span></div>
                                <div className="title"><span>Your Participation Tickets</span></div>
                            </div>
                            <div className="jackpot-wallet">
                                <div className="wallet-address"><span><Link
                                    to={"/"}
                                    target="_blank">0x0D9ccD77...a74E289468</Link></span></div>
                                <div className="title"><span>Jackpot Wallet</span></div>
                            </div>
                            <div className="jackpot-timer">
                                <div className="timer-wrap">
                                    <div className="hours">
                                        <JackpotTimer />
                                    </div>
                                </div>
                                <div className="title"><span>Ending in</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rows-wrap">
                    {
                        dataMonthly.map((item =>
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
                            </div>
                        ))
                    }

                </div>
                <div className="bottom-nav">
                    <div className="bottom-nav-links header-links">
                        <Link className="bottom-nav-link header-link faq" to={"/faq"}>
                            <div className="image"></div>
                            <div className="text"><span>FAQ</span></div>
                        </Link>
                        <Link className="bottom-nav-link header-link weekly-jackpot" to="/monthly_jackpot"></Link>
                        <Link className="bottom-nav-link header-link history" to="/jackpot_winners">
                            <div className="image"></div>
                            <div className="text"><span>History</span></div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MonthlyJackpot