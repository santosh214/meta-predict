import React, { useContext, useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import flagUs from '../../assets/images/flags/us.svg'
import { flagMenu } from '../../assets/json-data/data-menuLink'
import { bitLogo, walletBtn, cameraImg, chevronDown, usaImg, logo } from '../../assets/images'
import SideMenu from './SideMenu'
import '../sidebar/menu.css'
import { SidebarContext } from './SidebarContext'
// import Dropdown from '../sidebar/Dropdown'
const SidebarMenu = () => {

    const { isSidebarOpen ,toggleProfile 
        ,toggleSidebar ,image, togglePopup} = useContext(SidebarContext);


    // Toggle dropdown menu 

    // const [isVisible, setIsVisible] = useState(false);

    // const toggleVisibility = () => {
    //     setIsVisible(!isVisible);
    // };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState(flagMenu[0]);
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const selectFlag = (item) => {
        setSelectedFlag(item);
        setIsDropdownOpen(false);
      };

 
 
    return (
        <>
    

            <div className='site_menu ' style={{
                left: isSidebarOpen ? '0' : '100%',
                transition: 'left 0.9s',
            }}>
                <a href="#" className="site_logo">
                    <img src={logo} alt="logo image" className="img-fluid" />
                </a>
                <div className="close toggle_menu" onClick={toggleSidebar}>
                    <span><i className="bi bi-x-lg"></i></span></div>
                <div className="account_box" >
                    {/* <div className="balance_amount" >
                        <img className="balance_amount_wallet_connect"
                          onClick={togglePopup}  src={walletBtn} />
                    </div> */}

                    {/* <Link to={"/"} className="profile_link" onClick={toggleProfile} >
                        <img
                            src={cameraImg} alt="camera" />
                        <span className="change-avatar-txt">Change Avatar</span>
                    </Link>
                    <div className="language-container" onClick={toggleDropdown}>
                        <img className="chevron-down" src={chevronDown}
                            alt="chevron" />
                        <img className="flag" src={selectedFlag.flag} alt={selectedFlag.text} />
                        <span className="language-container__lang">{selectedFlag.text}</span>
                    </div>

                    <div className="image_bubble" >  
                        <img src={image} alt="Sidebar image" className="user_avatar " />
                        <div className="country">
                            <img src={flagUs} alt="usa image" />
                        </div>
                    </div> */}
                </div>
                {/* {isSidebarOpen && ( */}
                <SideMenu />
                {/* )} */}

                {/*Flags Dropdown menu  */}
                {isDropdownOpen && (
                   <div className="site_menu_popup_wrap " onClick={toggleDropdown} >
                   <div  className="site_menu_popup" >
                       <img src="../assets/img/shap-dopdown.png" className="site_menu_popup_bg"/>
                       <div className="site_menu_popup_content_box">
                          {
                            flagMenu.map((item => 
                               <button className="site_menu_popup_content_btn" key={item.id}
                                onClick={() => selectFlag(item)}>
                               <img src={item.flag} className="site_menu_content_flag"/>
                                   <p className="site_menu_content_lang"><span>{item.text}</span></p>
                               </button>
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

export default SidebarMenu