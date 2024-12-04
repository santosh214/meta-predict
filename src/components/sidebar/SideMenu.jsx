import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { menuLinks } from '../../assets/json-data/data-menuLink'
import soundEffects from '../../assets/audio/sound-effects.mp3'
import voiceEffects from '../../assets/audio/voiceover.mp3'
import backgroundEffects from '../../assets/audio/background-music.mp3'
import { SidebarContext } from './SidebarContext'

const SideMenu = () => {

    const { handleMenuItemClick } = useContext(SidebarContext);


    // Toggle switch button audio file 
  
    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(false);
    const [isOn3, setIsOn3] = useState(false);
    const [audio] = useState(new Audio(soundEffects));
    const [audio2] = useState(new Audio(voiceEffects));
    const [audio3] = useState(new Audio(backgroundEffects));


  // 1. sound effects
    const handleClick = () => {
        setIsOn(!isOn);
        if (!isOn) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the beginning
        }
    };

 // 2. voice effects
 const handleClicktwo = () => {
    setIsOn2(!isOn2);
    if (!isOn2) {
        audio2.play();
    } else {
        audio2.pause();
        audio2.currentTime = 0; // Reset audio to the beginning
    }
};
 // 3. background effects
 const handleClickthree = () => {
    setIsOn3(!isOn3);
    if (!isOn3) {
        audio3.play();
    } else {
        audio3.pause();
        audio3.currentTime = 0; // Reset audio to the beginning
    }
};
    return (
        <>
            <div className="links_scroll">
                {
                    menuLinks.map((menulink) => (
                        <div className="box">
                            <div className="cat_title" key={menulink.title}
                            >{menulink.title}</div>

                            <div className="links">
                                {menulink.links.map((linkmenu) => (
                                    <NavLink to={linkmenu.link} key={linkmenu.id}
                                        onClick={() => handleMenuItemClick(linkmenu.id)}
                                        className={linkmenu.menuClass} >
                                        {linkmenu.name}
                                    </NavLink>
                                ))
                                }
                            </div>
                        </div>
                    ))
                }
               
               {/* <div className="box">
               <div className="cat_title" >Settings</div>
               <div className="sound_row sound_effects">
                    <div className="title">Sound Effects</div>
                    <div className="toggle-button-cover">
                        <div id="button-3" className="button r" onClick={handleClick}>
                            <input 
                            className="checkbox" 
                            type="checkbox"
                            checked={isOn} 
                            onChange={() => { }} />
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
                <div className="sound_row voiceover">
                    <div className="title">Voiceover</div>
                    <div className="toggle-button-cover">
                        <div id="button-3" className="button r" onClick={handleClicktwo}>
                            <input 
                            className="checkbox"
                            type="checkbox" 
                            checked={isOn2} 
                            onChange={() => { }}/>
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
                <div className="sound_row background_music">
                    <div className="title">Background Music</div>

                    <div className="toggle-button-cover">
                        <div id="button-3" className="button r" onClick={handleClickthree}>
                            <input 
                            className="checkbox" 
                            type="checkbox" 
                            checked={isOn3} 
                            onChange={() => { }}/>
                            <div className="knobs"></div>
                            <div className="layer"></div>
                        </div>
                    </div>
                </div>
               </div> */}


                {/* <div className="logout">Disconnect Wallet</div> */}
            </div>

        </>
    )
}

export default SideMenu