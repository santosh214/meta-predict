
import React, { useContext } from 'react'
import { logo, mobilelogo, menuIcon, walletBtn } from '../../assets/images'
import { SidebarContext } from '../sidebar/SidebarContext'
import { Link } from 'react-router-dom'
import { useConnectWallet, useSetChain } from '@web3-onboard/react'
import { shortddres } from '../../utils/utils'

const Header = () => {

    const { toggleSidebar } = useContext(SidebarContext);
    // const { toggleProfile } = useContext(SidebarContext);
    const { togglePopup } = useContext(SidebarContext);
    const { image } = useContext(SidebarContext);
    const [{ wallet }, connect] = useConnectWallet();
    const [{ },setChain,] = useSetChain();



    const handleConnect = async () => {
        try {
          let conn = await connect();
          if (conn) {
            // console.log("wallet?.chains[0].id", conn[0].chains[0].id);
            if (conn[0]?.chains[0]?.id !== "0x460") {
            //   console.log("window",window)
              
              toast.error("Wrong Network! please switch network to Ozone 2.0");
              setChain({ chainId: "0x460" });
            } else {
              toast.success("Connected");
              // toast.success("right network connected")
            }
            // console.log("waaa");
          }
        } catch (error) {
          toast.error("Couldn't connect");
        }
      };

    return (
        <>
            <header className="header" id="header">
                <div className="site_logo">
                    <Link to={'/'}>
                    <img src={logo} alt="logo"  />
                    </Link>
                    <Link to={'/'}>
                    <img src={logo} className="mobile_logo" />
                    </Link>
                    {/* <a className="mobile_leaderboard" href="#"  ></a> */}
                </div>
                {/* <Link to={'/affiliate'} className="header_leftbtn" >
                    <div></div>
                </Link> */}

                <div className="balance_box">
                    {wallet?.accounts[0].address ? <div className='butt'> <span className="wallet_connect_btn2"> {shortddres(wallet?.accounts[0].address)}</span></div>:
                    <img className="wallet_connect_btn"
                        src={walletBtn} alt='wallet btn'
                        onClick={handleConnect} />}
                </div>
                {/* <Link to={'/winnertable'}>
                    <div className="header_rightbtn" >
                        <div></div>
                    </div>
                </Link> */}
                <div className="right_group">
                    {/* <Link className="user_avatar" to={'/user-profile'}>
                        <img src={image} alt="Profile" className="profile-image" />
                    </Link> */}
                    {/* <div className="toggle_chat">
                    <img src={chatImg} alt='chat image'/>
                    <span>Chat</span>
                   </div> */}
                    <button className='menu_btn' onClick={toggleSidebar} >
                        <img src={menuIcon} alt='menu icon' />
                    </button>
                </div>
            </header>


        </>
    )
}

export default Header