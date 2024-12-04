import React, {useContext} from 'react'
import '../walletpopup/wallet.css'
import { apple, coinbase, facebook, google, metamask } from '../../assets/images'
import { SidebarContext } from '../sidebar/SidebarContext'
const Wallet = () => {

    const { togglePopup } = useContext(SidebarContext);
    const { showPopup } = useContext(SidebarContext);
    return (
        <>

           <div className={`connect_wallet_popup_wrap ${showPopup ? 'show' : 'hide'}`}  onClick={togglePopup}>
           <div className="cwp_content" onClick={(e) => e.stopPropagation()}>
                <div className="close" onClick={togglePopup}></div>
                <p className="cwp_header">Connect With</p>
                <div className="cwp_connect_btns">
                    {/* <div className="cwp_btn_row add_margin1">
                        <div className="cwp_btn google">
                            <img src={google} alt='google'/>
                            <p className="connect_btn_txt">Google</p>
                        </div>
                        <div className="cwp_btn facebook">
                            <img src={facebook} alt='facebook'/>
                            <p className="">Facebook</p>
                        </div>
                    </div>
                    <div className="cwp_btn_row">
                    <div className="cwp_btn apple w-100 text-end">
                            <img src={apple} alt='apple'/>
                            <p className="connect_btn_txt ">Apple</p>
                        </div>
                    </div>
                    <div className="cwp_btn_row">
                        <div className="input_email_wrap">
                            <input placeholder="Enter your Email"  />
                            <div className="submit "><p>Send</p>
                            </div>
                        </div>
                    </div>
                    <div className="cwp_divider_wrap">
                        <div className="full_divider">
                        </div>
                    </div> */}
                    <div className="cwp_btn_row add_margin">
                        <div className="cwp_btn metamask">
                            <img src={metamask} alt='metamask' />
                            <p>Metamask</p>
                        </div>
                        <div className="cwp_btn coinbase">
                            <img src={coinbase} alt='coinbase'/>
                            <p>Coinbase</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    )
}

export default Wallet