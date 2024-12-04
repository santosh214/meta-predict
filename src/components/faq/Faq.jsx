import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { faqHeaderImg, menuIcon } from '../../assets/images'
import { SidebarContext } from '../sidebar/SidebarContext'
import './style.css'
import { accordionData, dropMenu } from '../../assets/json-data/data-faq'
const Faq = () => {

    const items = [
        { label: 'About the game', value: 'item1' },
        { label: 'System terms', value: 'item2' },
        { label: 'Trading rules', value: 'item3' },
        { label: 'Digital wallets', value: 'item4' },
        { label: 'Affiliate program', value: 'item5' },
        { label: 'Weekly Jackpot', value: 'item6' },
        { label: 'Weekly Jackpot', value: 'item7' },
        { label: 'Monthly Jackpot', value: 'item78' }
    ];

    const { toggleSidebar } = useContext(SidebarContext);

    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [selectedItem2, setSelectedItem2] = useState(dropMenu[0]);
    const [isVisible, setIsVisible] = useState(false);

    const selectItem = (item) => {
        setSelectedItem(item);
        setIsVisible(false);
    };

    const selectItem2 = (menuLink) => {
        setSelectedItem2(menuLink);
        setIsVisible(false);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null); // Close if currently open
        } else {
            setActiveIndex(index); // Open the clicked section
        }
    };

    return (
        <>
            <div className="page faq_page  text_page  affiliate_page mobileview" >
                <div className="faq_header">
                    <img src={faqHeaderImg} className="faq_header_bg" />
                    <div className="faq_top_header">
                        <Link className="faq_back_btn" to={"/"} ></Link>
                        <p className="faq_header_txt_web"><span>FAQ</span></p>
                        <p className="golden-title mobile-view"><span>FAQ</span></p>
                        <button className="faq_menu_btn" onClick={toggleSidebar}>
                            <img src={menuIcon} alt='menu icon' />
                        </button>
                    </div>
                    <div className="faq-mobile-dropdown mobile-view  ">
                        <div className="mobile-dropdown-wrap">
                            <div className="faq-active-category" onClick={toggleVisibility}
                            ><span>{selectedItem.label}</span></div>
                            {
                                isVisible && (
                                    <div className="faq-categories ">
                                        {
                                            items.map((item) => (
                                                <div className="faq-category"
                                                    key={item.value}
                                                    onClick={() => selectItem(item)}>
                                                    <span> {item.label}</span>
                                                </div>
                                            ))
                                        }

                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="faq_header_list">
                        <div className="faq_header_current_list" onClick={toggleVisibility}>
                            <p>{selectedItem2.title}</p>
                            <div rotate="false">
                            </div>
                        </div>
                        {isVisible && (
                            <div className="faq_header_drop_list">
                                {
                                    dropMenu.map((menuLink =>
                                        <div className={`faq_header_list_item 
                                        ${menuLink.id === selectedItem2.id ? 'active' : ''}`}
                                            key={menuLink.id} onClick={() => selectItem2(menuLink)}>
                                            <p >
                                                {menuLink.title}
                                            </p>
                                        </div>

                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
                <div className="faq_content_wrap">
                    <div className="faq_content">
                        {
                            accordionData.map((accordion, index) => (
                                <div className="faq_content_row" key={index}>
                                    <div className="faq_content_header"
                                        onClick={() => toggleAccordion(index)}>
                                        <p className="faq_content_header_desc">{accordion.header}</p>
                                        <div className={activeIndex === index ? 'faq_content_content_arr' : 'faq_content_header_arr'}></div>
                                    </div>
                                    {activeIndex === index && (
                                        <div className="faq_content_content">
                                            <p className='faq_content_content_desc'>{accordion.content}</p>
                                        </div>
                                    )}
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq