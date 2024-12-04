import React, { useState } from 'react'

const digit = [
    {
        id: 1,
        num: '0.1'
    },
    {
        id: 2,
        num: '0.2'
    },
    {
        id: 3,
        num: '0.5'
    },
    {
        id: 4,
        num: '1.0'
    },
    // {
    //     id: 5,
    //     num: '25'
    // },
    // {
    //     id: 6,
    //     num: '30'
    // },
    // {
    //     id: 7,
    //     num: '35'
    // }
]

const InvestBox = ({amount, setAmount}) => {
    const [visibleTab, setVisibleTab] = useState(digit[0].id)
    const handleBetAmount=(data)=>{
        setVisibleTab(data.id)
        // console.log("🚀 ~ handleBetAmount ~ data.id:", data)
        setAmount(data.num)
    }
    return (
        <>
            <div className="invest_select">
                {
                    digit.map((data =>
                        <div className={visibleTab === data.id ?
                            "invst_btn invst_btn_active" : "invst_btn"}
                            key={data.id}
                            onClick={() => handleBetAmount(data)}>
                            <p className="turbo">{data.num}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default InvestBox