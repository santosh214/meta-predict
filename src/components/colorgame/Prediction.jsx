import React, {useState} from 'react'
import Button from '../../pages/component/prediction/popup/Button'
import '../../components/colorgame/prediction.css'
import '../../components/colorgame/predpopup.css'
import PredNumberBox from '../../pages/component/prediction/PredNumberBox'
import PredTable from '../../pages/component/prediction/PredTable'
import PredPopup from '../../pages/component/prediction/popup/PredPopup'
import { popupBox } from '../../pages/component/prediction'
import Overlay from '../../pages/component/prediction/popup/Overlay'
const Prediction = () => {

 // State to track which popup is open
 const [openPopup, setOpenPopup] = useState(null);

 const handleButtonClick = (id) => {
   setOpenPopup(openPopup === id ? null : id); // Toggle popup visibility
 };

    return (
        <>
            <div className="trade_center">
                <div className="market">
                    {/* Prediction buttons */}

                    <div className="color_btns">
                        {popupBox.map((item) => (
                            <Button
                            key={item.id}
                            id={item.id}
                            btnClass={item.btnClass}
                            buttonText={item.btntext}
                            onClick={handleButtonClick}
                            />
                        ))}
                    </div>

                    {/* Prediction Number Box */}
                    <div className="prediction_num">
                        <PredNumberBox />
                    </div>

                    {/* Prediction Color Table  */}

                    <div className="GameRecord__C tab__Content ">
                        <PredTable />
                    </div>

                    <div className="GameRecord__C-foot">
                        <div className="GameRecord__C-foot-previous disabled"><i className="bi bi-chevron-double-left "
                        ></i></div>
                        <div className="GameRecord__C-foot-page">1/5</div>
                        <div className="GameRecord__C-foot-next"><i className="bi bi-chevron-double-right "
                        ></i></div>
                    </div>

                   {/* Overlay effects on pupups  */}
                   <Overlay isActive={openPopup !== null} onClick={() => setOpenPopup(null)} />

                    {/* Prediction Popup Box */}

                    {popupBox.map((item) => (
                        <PredPopup
                            key={item.id}
                            id={item.id}
                            popupHead={item.popupHead}
                            popupText={item.popupText}
                            numColor={item.numColor}
                            closeBtn={item.closeBtn}
                            isActive={openPopup === item.id}
                            onClose={() => setOpenPopup(null)}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}

export default Prediction;