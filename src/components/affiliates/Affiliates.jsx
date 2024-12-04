import React, {useContext} from 'react'
import HeaderIcon from '../reuseicon/HeaderIcon'
import GeneratePopup from '../popup/GeneratePopup'
import { SidebarContext } from '../sidebar/SidebarContext'
const Affiliates = () => {

  const { toggleGenreatePopup } = useContext(SidebarContext);

  return (
    <>

        <div className="page affiliate_page affiliate_links_page table_page mobileview"  >
         <HeaderIcon title={"REFERRAL PROGRAM LINK MANAGER"}/>
        <div className="add_link_btn" onClick={toggleGenreatePopup}>Generate Link</div>
        <div className="counter_row">
            <div className="links_count">0 Links Created</div>
        </div>
        <div className="table_header default-web-view">
            <div className="th sortable date">DATE CREATED</div>
            <div className="th name">NAME</div>
            <div className="th link">LINK</div>
            <div className="th sortable total_users">FRIENDS REGISTERED</div>
            <div className="th sortable today_total_profits">EARN TODAY</div>
            <div className="th sortable past_total_profits">EARNINGS TOTAL</div>
            <div className="th action"></div>
        </div>
        <div className="table_header mobile-view">
            <div className="th sortable date">Date / Name</div>
            <div className="th sortable total_users">Friends</div>
            <div className="th sortable today_total_profits">EARN TODAY</div>
            <div className="th sortable past_total_profits">EARNINGS TOTAL</div>
            <div className="th action"></div>
        </div>
        {/* <div className="linkmanager_content default-web-view"></div>
        <div className="linkmanager_content mobile-view"></div> */}
    </div>

    {/* Genrate Popup */}

    <GeneratePopup/>

    </>
  )
}

export default Affiliates