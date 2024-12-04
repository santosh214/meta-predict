import React, {useContext, useState} from 'react'
import './profile.css'
import { SidebarContext } from '../sidebar/SidebarContext';

const UserPorfile = () => {

    const { isOpen } = useContext(SidebarContext);
    const { toggleProfile } = useContext(SidebarContext);

    const { tempImage, uploadImage, applyImage , isImageChanged } = useContext(SidebarContext)
    const [dragging, setDragging] = useState(false);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      uploadImage(file);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
      setDragging(true);
    };
  
    const handleDragLeave = () => {
      setDragging(false);
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      setDragging(false);
      const file = event.dataTransfer.files[0];
      if (file) {
        uploadImage(file);
      }
    };
  
    return (
        <>
            <div  className={`user_profile_wrap ${isOpen ? 'open' : 'closed'}`}>
                <div className="user_profile_close_btn">
                    <a href="#" onClick={toggleProfile}>
                        <span ><i className="bi bi-x-lg"></i></span></a>
                </div>
                <div className="user_profile_header_box">
                    <p className="user_profile_header">Change Your Avatar to <br/>Maximize Your Experience</p>
                </div>
                <div className="user_profile_form_box">
                    <div 
                     className={`user_profile_image_box dropzone ${dragging ? 'dragging' : ''}`} 
                     onDragOver={handleDragOver} 
                     onDragLeave={handleDragLeave} 
                     onDrop={handleDrop}
                    >

                        {tempImage && 
                        <img src={tempImage} alt="Profile" className="user_profile_user_avatar_img" />
                        }

                        <input
                            id="file-input"
                            type="file"
                            accept="image/*" required onChange={handleImageUpload}
                            className="user_profile_file_input"
                        />
   
                        <div className="user_profile_upload_btn">
                            <label htmlFor="file-input">
                                <span className="user_profile_upload_img"  >
                                    <i className="bi bi-camera"></i>
                                </span>
                            </label>
                        </div>
                    </div>
                    <p className="user_profile_form_desc_text">You can upload your own favorites picture. when you done click on Apply changes button
                    </p>
                    <div className="user_profile_apply_box">
                        <button className="user_profile_apply_btn" onClick={applyImage} disabled={!isImageChanged} >Apply Changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPorfile;