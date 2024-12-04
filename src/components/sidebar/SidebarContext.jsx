// SidebarContext.js
import React, { createContext, useState } from 'react';
import avatarGif from '../../assets/images/avatar/avatar_gif.gif'

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(avatarGif);
  const [tempImage, setTempImage] = useState(avatarGif); // Temporary image before applying changes
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [showmobilepool, setShowMobilepool] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [genratePopup, setGenratePopup] = useState(false);

  // toogle wallet popup open
  const togglePopup = () => {
    setShowPopup(!showPopup);
    setIsSidebarOpen(false);

  };

    // toogle Generate popup open
    const toggleGenreatePopup = () => {
      setGenratePopup(!genratePopup);
    };
    

  // site bar 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Profile sidebar
  const toggleProfile = () => {
    setIsOpen(!isOpen);
    setIsSidebarOpen(false);
  };

  // Remove Sidebar every menu links
  const handleMenuItemClick = (id) => {
    setActiveMenuItem(id)
    setIsSidebarOpen(false);
  };

  // mobile pool up and down hide and show 

  const toggleMobilePool = () => {
    setShowMobilepool(!showmobilepool);
  };


  // image upload 

  const uploadImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempImage(reader.result);
      setIsImageChanged(true);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const applyImage = () => {
    if (tempImage) {
      setImage(tempImage);
      //  setTempImage(null);
      setIsImageChanged(false);
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  return (
    <SidebarContext.Provider value={{
      isSidebarOpen, toggleSidebar, isOpen, toggleProfile,
      handleMenuItemClick, image, uploadImage, tempImage, setTempImage, applyImage,
       isImageChanged, toggleMobilePool, showPopup ,togglePopup, showmobilepool,
       setShowMobilepool, genratePopup, toggleGenreatePopup
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
