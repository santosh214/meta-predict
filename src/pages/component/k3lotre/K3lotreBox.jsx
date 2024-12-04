import React, {useState} from 'react'
import { k3lotreBox } from '.'
const K3lotreBox = () => {

    const [visibleTab, setVisibleTab] = useState(k3lotreBox[0].id)
    return (
        <>
            <div className="GameList__C">
               {
                k3lotreBox.map((box =>
                    <div className=
                    {visibleTab === box.id ?
                    "GameList__C-item active" : 
                    "GameList__C-item"}
                     key={box.id}
                     onClick={() => setVisibleTab(box.id)}>
                    <div className="box"></div>
                    <div>
                        <p>{box.boxtext} <br /> {box.boxtext2}</p>
                    </div>
                </div>
                ))
               }
            </div>
        </>
    )
}

export default K3lotreBox