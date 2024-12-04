import React from 'react'

const Overlay = ({ isActive, onClickOverlay }) => {
    return isActive ? <div className="overlay" onClick={onClickOverlay}></div> : null;
  };

export default Overlay