import React, {useContext} from 'react'
import HeaderIcon from '../reuseicon/HeaderIcon'
import { SidebarContext } from '../sidebar/SidebarContext';
import GeneratePopup from '../popup/GeneratePopup';

const EarningReport = () => {
  const { toggleGenreatePopup } = useContext(SidebarContext);

  return (
    <>
    
    <div className="page affiliate_page affiliate_report_page table_page mobileview" >
        <HeaderIcon title={"REFERRAL PROGRAM EARNINGS REPORT"}/>
    <div className="add_link_btn" onClick={toggleGenreatePopup}>Generate Link</div>
    <div className="table_header default-web-view">
        <div className="th sortable date">DATE</div>
        <div className="th sortable perTier1">TIER 01</div>
        <div className="th sortable perTier2">TIER 02</div>
        <div className="th sortable perTier3">TIER 03</div>
        <div className="th sortable totalAmount">TOTAL AMOUNT</div>
        <div className="th sortable status sorter desc">STATUS</div>
        <div className="header_right"></div>
    </div>
    <div className="table_header mobile-view">
        <div className="th sortable date">DATE</div>
        <div className="th sortable status sorter desc">STATUS</div>
        <div className="th hash-details">Hash Details</div>
        <div className="th action-empty-space"></div>
    </div>
    <div className="earnings_list table_body default-web-view"></div>
    <div className="earnings_list table_body mobile-view"></div>
</div>

{/* Genrate Popup Box  */}
<GeneratePopup/>
    </>
  )
}

export default EarningReport