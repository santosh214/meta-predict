import React from 'react'
import { flagMenu } from '../../assets/json-data/data-menuLink'
import '../sidebar/menu.css'
const Dropdown = () => {
  return (
    <>
        <div className="site_menu_popup_wrap " >
        <div className="site_menu_popup" >
            <img src="../assets/img/shap-dopdown.png" className="site_menu_popup_bg"/>
            <div className="site_menu_popup_content_box">
               {
                 flagMenu.map((item => 
                    <button className="site_menu_popup_content_btn" key={item.id}>
                    <img src={item.flag} className="site_menu_content_flag"/>
                        <p className="site_menu_content_lang"><span>{item.text}</span></p>
                    </button>
                 ))
               }
          
        </div>
    </div>
</div>
    </>
  )
}

export default Dropdown