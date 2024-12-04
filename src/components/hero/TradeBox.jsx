import React, { useContext, useEffect, useState } from 'react'
import Chart from '../../pages/component/trade/Chart'
import Timer from '../../pages/component/trade/Timer'
import InvestBox from '../../pages/component/trade/InvestBox'
import ToolTips from '../../pages/component/trade/ToolTips'
import ResultText from '../../pages/component/trade/ResultText'
import { IoInfiniteSharp } from "react-icons/io5";
import { graphBtc, assetsBtc, inviteFriBtn, treasure1, } from '../../assets/images'
import MobileHeaderPool from '../../pages/component/trade/MobileHeaderPool'
import MobilePoolDown from '../mobilepooldown/MobilePoolDown'
import MobilePoolUp from '../mobilepoolup/MobilePoolUp'
import MobileDownButton from '../mobilepooldown/MobileDownButton'
import MobileUpButton from '../mobilepoolup/MobileUpButton'
import { SidebarContext } from '../sidebar/SidebarContext'
import BitcoinPriceChart from '../Chart'
import { ethers } from 'ethers'
import { predictContractInstByAddrContractAbi } from '../contract/prediction'
import { useConnectWallet } from '@web3-onboard/react'


const TradeBox = ({amount, setAmount}) => {
    const [{ wallet }] = useConnectWallet();

    const { toggleMobilePool } = useContext(SidebarContext);
    const { showmobilepool } = useContext(SidebarContext);
    const [poolStatus, setPoolStatus] = useState({
        status: "",
        time: "",
        event: "",
        finalPrice: "",
        initialPrice: "",
      });

      useEffect(() => {
        const socket = new WebSocket("https://socket.metapredict.io/");
        socket.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          setPoolStatus({ ...parsedData });
        };
    
        return () => {
          socket.close();
        };
      }, []);


      useEffect(() => {
        const providerUrl = "https://testnet.ozonescan.org/rpc"; // Example: Infura, Alchemy
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);
        const contractAddress = import.meta.env.VITE_APP_PREDICTION_ADDRESS;
        const contract = new ethers.Contract(
          contractAddress,
          predictContractInstByAddrContractAbi,
          provider
        );
        contract.on(
          "TradeWinningsSent",
          (
            poolId,
            sender,
            tradeAmount,
            winningsAmount,
            indexedSender,
            feePercentage
          ) => {
            if (
              indexedSender ===
              ethers.utils.getAddress(wallet?.accounts[0].address)
            ) {
              toast.success("You win the game");
            }
          }
        );
    
        return () => {
          contract.removeAllListeners();
        };
      }, [wallet]);
    




    return (
        <>

            <MobileHeaderPool  poolStatus={poolStatus}/>
            <div className="trade_center">
                <div className="market">
                    <div className="stats">
                        <div className="side up">
                            <div className="pool_payout">
                                        <p className="m-0 p-0">Initial Price</p>
                                <h1 className="up" >{poolStatus.initialPrice}</h1>
                                {/* <div className="title">UP POOL PAYOUT</div>
                                <div className="amount up" >204<span className="sign">%</span></div> */}
                            </div>
                            <div className="own_stats">
                                <div className="investment">
                                    {/* <div className="title">YOUR INVESTMENT</div>
                                    <div className="amount">
                                        <div className="icon-matic"></div>
                                        <IoInfiniteSharp className='icons_infinity' />
                                        10.0
                                    </div> */}
                                </div>
                                <div className="payout">
                                    {/* <div className="title">POTENTIAL RETURN</div>
                                    <div className="amount large_txt">
                                        <div className="icon-matic"></div>
                                        <IoInfiniteSharp className='icons_infinity' />
                                        20.4
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="side down">
                            <div className="pool_payout">


                                <p className="m-0 p-0">Final Price</p>
                                <h1 className="down" >{poolStatus.finalPrice}</h1>

                                {/* <div className="title">DOWN POOL PAYOUT</div>
                                <div className="amount down" >177<span className="sign">%</span></div> */}
                            </div>
                            <div className="own_stats">
                                <div className="investment">
                                    {/* <div className="title">YOUR INVESTMENT</div>
                                    <div className="amount">
                                        <div className="icon-matic"></div>
                                        <IoInfiniteSharp className='icons_infinity' />10.0
                                    </div> */}
                                </div>
                                <div className="payout">
                                    {/* <div className="title">POTENTIAL RETURN</div>
                                    <div className="amount large_txt">
                                        <div className="icon-matic"></div>
                                        <IoInfiniteSharp className='icons_infinity' />17.7
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="position_timer" tradephase="open">
                        <Timer poolStatus={poolStatus} />
                    </div>
                    <div className="graph-area">
                        <BitcoinPriceChart/>
                    </div>
                    {/* <div className="graph_area">
                        <div className="graph_asset_mobile">
                            <div className="graph_asset_mobile_content">
                                <div className="asset_wrap">
                                    <img src={graphBtc} alt="Btc img" />
                                </div>
                            </div>
                        </div>
                        <div className="asset_image">
                            <img src={assetsBtc} alt="Btc Image" />
                            <div className="graph_title"></div>
                        </div>
                        <div className="invite_friends_box">
                            <p className="invite_friends_box_txt">INVITE</p>
                            <img src={inviteFriBtn} alt="inviteFrindBtn" />
                        </div>
                        <div className="phase_title phase_open">
                            <span>UP OR DOWN?</span><br /><span>PLACE YOUR
                                TRADE!</span>
                        </div>
                        <div className="history_graph">
                            <Chart />


                            <a href="#" id="jackpot_balance" className="jackpot">
                                <div className="top-black">
                                    <span>Jackpot</span>
                                    <img src={treasure1} alt="Treasure" />
                                </div>
                                <div className="bottom-yellow">
                                    <div className="amount-wrap">
                                        <div className="amount">
                                            <span><text>12345343</text></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="last_results">
                                <div className="system_stats_box">
                                    <ResultText />

                                    <div className="mobile_system_stats">
                                        <div className="anim_box componentB">
                                            <span className="sys_title_gold">
                                                <p>ALL TIME WINS PAID:</p>
                                                <p amt="ture">34,364</p>
                                            </span>
                                            <span className="sys_title">PLAYERS:</span>
                                            <span className="sys_sub_title">342</span>
                                        </div>



                                        <div className="anim_box componentA">
                                            <span className="main_title">24H WIN RATIO:</span>
                                            <span className="sys_sub_title">34.5%</span>
                                            <span className="main_title">24H WINS</span>
                                            <span className="sys_sub_title">234,233,24,22</span>
                                        </div>
                                    </div>
                                </div>


                                <ToolTips />

                            </div>
                        </div>
                    </div> */}

                </div>
                <div className="pools_return_wrap">
                    <button className="toggle-players mobile-view"  onClick={toggleMobilePool}>
                        {showmobilepool ? '-' : '+'}
                    </button>
                 
                            <MobilePoolUp />
                            <MobilePoolDown />
                </div>
                <div className="trade_btns_mobile ">
                    <MobileUpButton  amount={amount} setAmount={setAmount}/>
                    <MobileDownButton  amount={amount} setAmount={setAmount}/>
                </div>
                <InvestBox amount={amount} setAmount={setAmount} />
            </div>

        </>
    )
}

export default TradeBox