import React,{useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { avt1, avt2, avt3, avt4, avt5, avt6, menuIcon } from '../../../assets/images'
import '../../jackpot/winner/historywinner.css'
import { dataWinnerTable } from '../../../assets/json-data/data-jackpot'
import { SidebarContext } from '../../sidebar/SidebarContext'
const HistoryWinner = () => {

    const { toggleSidebar } = useContext(SidebarContext);
    const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
        <div className="page jackpot_winners_page jackpot_winners mobileview">
        <div className="base-bg"></div>
        <div className="lights-bg"></div>
        <div className="jackpot-winners-header">
            <div className="header-top">
                <Link className="back_btn" to={"/"}>
                </Link>
                <div className="header-links">
                    <Link className="header-link faq" to={"/faq"}>
                        <div className="image"></div>
                        <div className="text"><span>FAQ</span></div>
                    </Link>
                <Link className="header-link history" to={"/weeklyjackpot"}></Link></div>
                <div className="jackpot-page-title">
                <span className="title">Winners</span>
                <span className="date">25-1.1.24</span>
            </div>
            <Link className="weekly-jackpot-button" to={"/weeklyjackpot"}></Link>
            <button className="menu_btn" onClick={toggleSidebar}>
            <img src={menuIcon} alt='menu icon'/>
            </button>
        </div>
    </div>
    <div className="winners-wrap">
        <div className="weekly-winners">
            <div className="winner-2-4-wrap">
                <div className="winner weekly-winner winner-4">
                    <div className="pic"><img src={avt1} alt='avatar'/>
                    </div>
                    <div className="frame"></div>
                    <div className="caption"><span>Winner Prize</span></div>
                    <div className="amount">
                        <div className="icon-matic"></div>&nbsp;<span>3178.10</span>
                    </div>
                    <div className="wallet"><span>
                        <Link to={"/"} target="_blank">0x042d5cA...769789cA</Link></span></div>
                </div>
                <div className="winner weekly-winner winner-2">
                    <div className="pic"><img  src={avt2} alt='avatar'/>
                    </div>
                    <div className="frame"></div>
                    <div className="caption"><span>Winner Prize</span></div>
                    <div className="amount">
                        <div className="icon-matic"></div>&nbsp;<span>7945.26</span>
                    </div>
                    <div className="wallet"><span><Link to={"/"} target="_blank">0x8f9e5F8...e939e033</Link></span></div>
                </div>
            </div>
            <div className="winner weekly-winner winner-1">
                <div className="pic"><img  src={avt6} alt='avatar'/>
                </div>
                <div className="frame"></div>
                <div className="caption"><span>Winner Prize</span></div>
                <div className="amount">
                    <div className="icon-matic"></div>&nbsp;<span>14301.47</span>
                </div>
                <div className="wallet"><span><Link to={"/"} target="_blank">0x5ec8f98...C8D4284f</Link></span></div>
            </div>
            <div className="winner-3-5-wrap">
                <div className="winner weekly-winner winner-3">
                    <div className="pic"><img src={avt3} alt='avatar'/>
                    </div>
                    <div className="frame"></div>
                    <div className="caption"><span>Winner Prize</span></div>
                    <div className="amount">
                        <div className="icon-matic"></div>&nbsp;<span>4767.16</span>
                    </div>
                    <div className="wallet"><span><Link to={"/"} target="_blank">0x42be75F...Fb0b2Ab1</Link></span></div>
                </div>
                <div className="winner weekly-winner winner-5">
                    <div className="pic"><img src={avt4} alt='avatar'/>
                    </div>
                    <div className="frame"></div>
                    <div className="caption"><span>Winner Prize</span></div>
                    <div className="amount">
                        <div className="icon-matic"></div>&nbsp;<span>1589.05</span>
                    </div>
                    <div className="wallet"><span><Link to={"/"} target="_blank">0x27e3881...d5c4562d</Link></span></div>
                </div>
            </div>
        </div>
        <div className="monthly-winners">
            <div className="winner monthly-winner winner-1">
                <div className="pic"><img src={avt5} alt='avatar'/>
                </div>
                <div className="frame"></div>
                <div className="caption"><span>Monthly Winner Prize</span></div>
                <div className="amount">
                    <div className="icon-matic"></div>&nbsp;<span>105999.91</span>
                </div>
                <div className="wallet"><span><Link to={"/"} target="_blank">0xB18285F...E7f4FeF0</Link></span></div>
            </div>
        </div>
    </div>
    <div className="btns-bottom">
        <div className="btn-bottom btn-share-results"><span>Share Results</span></div>
        <div className="btn-bottom btn-history-winners" onClick={toggleVisibility}><span>Winners History</span></div>
    </div>
    <div className="bottom-nav">
        <div className="bottom-nav-links header-links">
                <Link className="bottom-nav-link header-link faq" to="/affilatefaq">
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

    {isVisible && (
    <div className="jackpot-history " >
        <div className="close" onClick={toggleVisibility}></div>
        <div className="title"><span>Winners History</span></div>
        <div className="table">
            <div className="table-header">
                <div className="date"><span>Date</span></div>
                <div className="player"><span>Winner</span></div>
                <div className="wallet"><span>Wallet</span></div>
                <div className="jackpot"><span>Jackpot</span></div>
                <div className="rank"></div>
                <div className="prize"><span>Prize</span></div>
            </div>
            <div className="table-body">
                {
                    dataWinnerTable.map((item => 
                        <div className="history-row" key={item.id}>
                        <div className="date"><span>{item.date}</span></div>
                        <div className="player">
                            <div>
                                 <img src={item.img} alt='avatar'/>
                            </div>
                        </div>
                        <div className="wallet"><span><Link to={"/"}  target="_blank">{item.walletAdd}</Link></span></div>
                        <div className="jackpot"><span>{item.jackpot}</span></div>
                        <div className="rank">
                            <div><img src={item.rankImg} alt='rank img'/></div>
                        </div>
                        <div className="prize">
                            <div className="icon-matic"></div>&nbsp;<span className="amount">{item.prizeAmount}</span>
                        </div>
                    </div>
                    ))
                }
              
    
            </div>
        </div>
    </div>
    )}
</div>
    </>
  )
}

export default HistoryWinner