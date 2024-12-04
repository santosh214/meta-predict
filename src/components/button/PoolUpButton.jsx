import React, {useContext} from 'react'
import { arrowUp } from '../../assets/images'
import { SidebarContext } from '../sidebar/SidebarContext';
const PoolUpButton = () => {
    const { togglePopup } = useContext(SidebarContext);
    return (
        <>
            <div className="trade_btn" disabled onClick={togglePopup}>
                <div className="fill">
                    <img src={arrowUp} alt="arrow btn" />
                </div>
                <div className="hold_tooltip"></div>
            </div>
        </>
    )
}

export default PoolUpButton