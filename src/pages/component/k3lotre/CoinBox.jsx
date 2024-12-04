import React from 'react'
import { k3lotreCoin } from '.'

const CoinBox = () => {
    return (
        <>

            <div className="K3B__C-bettingList" >
                {
                    k3lotreCoin.map((coin =>
                        <div className="num num1" key={coin.id}>
                            <div className={coin.ballClass}>
                                <div className="K3B__C-odds-bet num1">{coin.id}</div>
                            </div>
                            <div className="K3B__C-odds-rate">{coin.textNum} </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default CoinBox