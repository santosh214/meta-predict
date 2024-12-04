import React from 'react'
import '../k3game/k3lotre.css'
import K3lotreBox from '../../pages/component/k3lotre/K3lotreBox'
import CoinBox from '../../pages/component/k3lotre/CoinBox'
import LudoBox from '../../pages/component/k3lotre/LudoBox'
const K3Lotre = () => {
    return (
        <>

            <div className="trade_center">
                <div className="market">
                    {/* k3lotre box  */}
                    <K3lotreBox />

                    <div className="main_TabContent">
                        <div className="K3B__C" typeid="9">
                            {/* <div className="K3B__C-mark" >
                                <div>1</div>
                                <div>2</div>
                            </div> */}

                            <div className="coin_Box">
                                {/* coinbox  */}
                                <CoinBox/>

                                 {/* ludo box */}
                             <LudoBox/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default K3Lotre