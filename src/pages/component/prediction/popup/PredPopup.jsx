import React, { useState } from 'react'
import { popupNumList, popupRangList } from '..';

const PredPopup = ({ id, popupHead, popupText,
    numColor, predColor, closeBtn, isActive, onClose }) => {

    const [visibleTab, setVisibleTab] = useState(popupNumList[0].id)
    const [visibleRangeTab, setVisibleRangeTab] = useState(popupRangList[0].id)

    const [number, setNumber] = useState(0);

    const increment = () => {
      setNumber(number + 1);
    };
  
    const decrement = () => {
      if (number > 0) {
        setNumber(number - 1);
      }
    };
  
    const handleChange = (event) => {
      const value = parseInt(event.target.value, 10);
      if (value >= 0) {
        setNumber(value);
      } else {
        setNumber(0);
      }
    };
        return (
            <>
                <div
                    className={`prediction_popup predpopup-${id}
                  ${isActive ? 'active' : ''}`} >
                    <div className="popup">
                        <div className="main_body_popup">
                            <div className={popupHead}>
                                <div className="popup-head-title">Win Go 1Min</div>
                                <div className="popup-head-selectName">
                                    <span>Select</span><span>{popupText}</span>
                                </div>
                            </div>
                            <div className="prediction__popup-body">
                                <div className="prediction__popup-body-line">Balance
                                    <div className="prediction__popup-body-line-list">

                                        {popupNumList.map((btnTab) => (
                                            <div
                                                key={btnTab.id}
                                                className={` prediction__popup-body-line-item predbg-${id} 
                                            ${visibleTab === btnTab.id ? `  active` : ""}`}
                                                onClick={() => setVisibleTab(btnTab.id)}
                                            >
                                                {btnTab.id}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="prediction__popup-body-line">Quantity
                                    <div className="prediction__popup-body-line-btnL">
                                        <div className="van-cell van-field prediction__popup-input" />
                                        <div className="van-cell__value van-field__value">
                                            <div className={numColor} onClick={decrement} id="decrement">-</div>
                                            <div className="van-field__body">
                                                <input
                                                    type="number"
                                                    value={number}
                                                    onChange={handleChange}
                                                    className="van-field__control"
                                                    min="0"
                                                />

                                            </div>
                                            <div className={numColor} onClick={increment} id="increment">+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="prediction__popup-body-line">
                                    <div></div>
                                    <div className="prediction__popup-body-line-list">
                                        {popupRangList.map((rangTab) => (
                                            <div
                                                key={rangTab.id}
                                                className={` prediction__popup-body-line-item predlistbg-${id} 
                                            ${visibleRangeTab === rangTab.id ? `  active` : ""}`}
                                                onClick={() => setVisibleRangeTab(rangTab.id)}
                                            >
                                                {rangTab.rangeNum}
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="prediction__popup-foot">
                                    <div className="prediction__popup-foot-c">
                                        <button className={closeBtn}
                                            onClick={onClose} >Cancel</button>
                                    </div>
                                    <div className="prediction__popup-foot-s">Total amount ₹1.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    export default PredPopup