import React, {useContext, useState, useEffect} from 'react'
import { genAffLink } from '../../assets/images'
import { SidebarContext } from '../sidebar/SidebarContext';
const GeneratePopup = () => {

    const { genratePopup,toggleGenreatePopup } = useContext(SidebarContext);

      const [name , setName] = useState('');

      useEffect(() => {
         const timer = setTimeout(() => {
           if(name !== ""){
            // console.log('name is:' + name);   
           }      
            }, 1000);
      
        return () => {
             clearTimeout(timer);
        }
      }, [name])
      
      const handleChange = (e) =>{
          setName(e.target.value);

      }
    return (
        <>

            <div className={`popups_container ${genratePopup ? 'show' : ''}`} >
                <div className="popup ">
                    <div className="close" onClick={toggleGenreatePopup}></div>
                    <div className="content">
                        <div className="new_campaign_form">
                            <img src={genAffLink} className="new_campaign_form_header" />
                            <div className="input_label">My Affiliate Link Nickname</div>
                            <div className="input_box">
                                <input type='text' 
                                className="name_input"
                                placeholder="Name Your Affiliate Link" 
                                onChange={handleChange}/>
                            </div>
                            <div className="input_instruct">6 to 15 Characters, Only english letters and numbers allowed.</div>
                            <div className="gold_btn">Create Link</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneratePopup