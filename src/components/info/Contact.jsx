import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { bitLogo } from '../../assets/images'
import '../info/contact.css'
const Contact = () => {

    const [text, setText] = useState('');
    const maxLength = 1000;

    const handleChange = (event) => {
        const inputText = event.target.value;
        if (inputText.length <= maxLength) {
            setText(inputText);
        }
    };

    const countWords = (text) => {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    };
    return (
        <>
            <div className="page contact_us default-web-view-block">
                <div className="logo-box">
                    <img src={bitLogo} alt='logo' />
                </div>
                <Link to={"/"}>
                    <div className="contact_us_close_btn"></div>
                </Link>
                <div className="main-flex">
                    <div className="inner-flex">
                        <div className="content-box">
                            <p className="main-title"><span>CONTACT US</span></p>
                            <p className="sub-title"><span>Please provide your contact details and a few details about you.</span></p>
                            <div className="icons-box">
                                <div className="icon-box web3">
                                    <div className="icon-image"></div>
                                    <div className="icon-top-text"><span>WEB3</span></div>
                                </div>
                                <div className="icon-box decentralized">
                                    <div className="icon-image"></div>
                                    <div className="icon-top-text"><span>TRANSPARENCY</span></div>
                                </div>
                                <div className="icon-box secure">
                                    <div className="icon-image"></div>
                                    <div className="icon-top-text"><span>SECURE</span></div>
                                </div>
                                <div className="icon-box blockchain">
                                    <div className="icon-image"></div>
                                    <div className="icon-top-text"><span>POLYGON CHAIN</span></div>
                                </div>
                            </div>
                            <p className="contact-you"><span>One of our managers will contact you.</span></p>
                        </div>
                        <div className="form-box">
                            <div className="form-wrap">
                                <form className="tutorial-form">
                                    <div className="tutorial-form-row nickname-row">
                                        <input placeholder="Your Nickname"
                                            type="text"
                                            name="nickname"
                                            id="nickname" />
                                    </div>
                                    <div className="tutorial-form-row email-row">
                                        <input placeholder="Your Email"
                                            type="email"
                                            name="email"
                                            id="email" value="" />
                                    </div>
                                    <div className="tutorial-form-row phone-row">
                                        <input placeholder="Your Phone"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value="" />
                                    </div>
                                    <div className="tutorial-form-row message-row">
                                        <textarea placeholder="Type your text here..."
                                            name="message"
                                            id="message"
                                            maxLength={maxLength}
                                            value={text}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                        <div className="message-limit">
                                            <span>{text.length} / {maxLength}</span></div>
                                    </div><button className="apply-button"><span>Send</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact