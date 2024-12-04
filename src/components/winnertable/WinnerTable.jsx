import React, {useContext, useEffect, useState} from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom'
import { walletBtn , menuIcon} from '../../assets/images'
import tableRows from '../../assets/json-data/data-winnertable'
import { SidebarContext } from '../sidebar/SidebarContext'
const WinnerTable = () => {

    const items = [
        { label: 'Yesterday', value: 'value1' },
        { label: 'Today', value: 'value2' },
        { label: 'This Week', value: 'value3' },
        { label: 'This Monthe', value: 'value4' },
        { label: 'All Time', value: 'value5' },
    ];

    const { toggleSidebar } = useContext(SidebarContext);

    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [isVisible, setIsVisible] = useState(false);
    const { togglePopup } = useContext(SidebarContext);


    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

   const selectItem = (item) => {
        setSelectedItem(item);
        setIsVisible(false);
      };

    useEffect(() =>{
        $(function () {
            $('.table_page').on('click', '.table_header .th', function () {
                    var index = $(this).index(),
                        rows = [],
                        thClass = $(this).hasClass('asc') ? 'desc' : 'asc';

                    $('.table_page .table_header .th').removeClass('asc desc');
                    $(this).addClass(thClass);

                    $('.table_page .table_body .tr').each(function (index, row) {
                        rows.push($(row).detach());
                    });

                    rows.sort(function (a, b) {
                        var aValue = $(a).find('.table_body .tr').eq(index).text(),
                            bValue = $(b).find('.table_body .tr').eq(index).text();

                        return aValue > bValue
                            ? 1
                            : aValue < bValue
                                ? -1
                                : 0;
                    });

                    if ($(this).hasClass('desc')) {
                        rows.reverse();
                    }

                    $.each(rows, function (index, row) {
                        $('.table_page .table_body').append(row);
                    });
                });
        }); 
    }, [])
  return (
    <> 
     <div className="page leaderboard_page table_page mobileview" >
        <div className="page_header">
            <Link className="back_btn" to={'/'} ></Link>
            <div className="header_center">
                <div className="balance" >
                    <img className="balance_amount_wallet_connect"
                    onClick={togglePopup} src={walletBtn}/>
                </div>
                <p className="golden-title"><span>LEADERBOARD</span></p>
            </div>
            <button className="menu_btn" onClick={toggleSidebar} >
                <img src={menuIcon} alt="menubtn"/>
            </button>
        </div>
        <div className="table_header">
            <div className="th sortable rank  " >#</div>
            <div className="th user" >PLAYER</div>
            <div className="th sortable trades " >TRADES</div>
            <div className="th sortable wins " >TRADE WINS</div>
            <div className="th sortable winrate " >WIN RATIO</div>
            <div className="th sortable profits " >NET PROFIT</div>
        </div>
        <div className="leaderboard_current_filter" onClick={toggleVisibility} >
            <p>{selectedItem.label}</p>
            {/* <span className="toggleUpDown" >  
            <i className="bi bi-chevron-down"></i>
            </span> */}
            <div className="arr" dropdown="open"> </div>
            {isVisible && (
            <div className="leaderboard_dropdown" >
                {
                    items.map((item =>
                        <p key={item.value} current="false" 
                        value="value1"
                        className={item.value === selectedItem.value ? 'active' : ''}
                        onClick={() => selectItem(item)}>{item.label}</p>             
                    ))
                }
            </div>
             )}
        </div>
  
        <div className="users_list table_body" >
          {
            tableRows.map((tablerow => 
                <div className="tr user_row"  >
                <div className="bg" ></div>
                <div className="rank">{tablerow.id }</div>
                <div className="user">
                    <div className="user-flex">
                        <div className="image_bubble">
                            <img className="user_avatar" src={tablerow.Img} alt='avatar image'/>
                            <div className="country"><img src={tablerow.imageFlag} alt='flags image'/></div>
                        </div>
                        <a className="wallet-address" href='/' >{tablerow.Address }</a>
                    </div>
                </div>
                <div className="trades">{tablerow.trades }</div>
                <div className="wins">{tablerow.wins }</div>
                <div className="winrate">{ tablerow.winrate }</div>
                <div className="profits">{tablerow.profits }</div>
            </div>
            ))
          }
        </div>
        </div>
    </>
  )
}

export default WinnerTable