import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { SidebarContext } from '../sidebar/SidebarContext'
import {  menuIcon, walletBtn,} from '../../assets/images'
import Icons from '.'

HeaderIcon.propTypes = {
    title: PropTypes.string,
};
function HeaderIcon (props) {
    const { toggleSidebar, togglePopup } = useContext(SidebarContext);
    const [visibleTab, setVisibleTab] = useState(Icons[1].id);

    const {title} = props;

    return (
        <>
            <div className="page_header">
                <div >
                    <Link to={"/"} className="back_btn" ></Link>
                </div>
                <div className="header_center">
                    <div className="balance" >
                        <img className="balance_amount_wallet_connect"
                         onClick={togglePopup} src={walletBtn} />
                    </div>

                    <p className="golden-title ">
                        <span>{title}</span>
                    </p>
                </div>
                <button className="menu_btn" onClick={toggleSidebar}>
                    <img src={menuIcon} />
                </button>
            </div>
            <div className="top_link right" >
                {
                    Icons.map((icon =>
                        <Link className="link_btn" to={icon.link} onClick={() => setVisibleTab(icon.id)}>
                            <div className={visibleTab === icon.id ?
                            "link_btn_img_box link_btn_img_box_active" : "link_btn_img_box"}
                            key={icon.id} >
                                <img src={icon.img} alt='faqImg' />
                            </div >
                            <p className={visibleTab === icon.id ?
                            "link_btn_content link_btn_content_active" : "link_btn_content"}>{icon.name}</p>
                        </Link>
                    ))
                }
                {/* <Link className="link_btn" to={"/affiliate"}>
                    <div className="link_btn_img_box_active"><img src={linkManagerImg} alt='linkmanger' /></div>
                    <p className="link_btn_content_active">Link Manager</p>
                </Link>
                <Link className="link_btn" to={"/earningreport"}>
                    <div className="link_btn_img_box ">
                        <img src={earningReportImg} alt='Earning Report'/></div>
                    <p className="link_btn_content">Earning Report</p>
                </Link>
                <Link className="link_btn" to="/affilatedashboard">
                    <div className="link_btn_img_box"><img src={dashboardImg} alt='dashboard Image'/></div>
                    <p className="link_btn_content">Dashboard</p>
                </Link> */}
            </div>
        </>
    )
}

export default HeaderIcon