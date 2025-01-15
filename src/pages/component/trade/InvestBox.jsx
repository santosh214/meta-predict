import React, { useState } from 'react'

const digit = [
    {
        id: 1,
        num: '0.1',
        disabled: false,
    },
    {
        id: 2,
        num: '0.2',
        disabled: false,
    },
    {
        id: 3,
        num: '0.5',
        disabled: false,
    },
    {
        id: 4,
        num: '1.0',
        disabled: true, // Mark as disabled
    },
]

const InvestBox = ({ amount, setAmount }) => {
    const [visibleTab, setVisibleTab] = useState(digit[0].id)

    const handleBetAmount = (data) => {
        if (data.disabled) return // Prevent action if the option is disabled
        setVisibleTab(data.id)
        setAmount(data.num)
    }

    return (
        <>
            <div className="invest_select">
                {digit.map((data) => (
                    <div
                        className={`invst_btn ${
                            visibleTab === data.id ? 'invst_btn_active' : ''
                        } ${data.disabled ? 'invst_btn_disabled' : ''}`}
                        key={data.id}
                        onClick={() => handleBetAmount(data)}
                        style={{
                            cursor: data.disabled ? 'not-allowed' : 'pointer',
                            opacity: data.disabled ? 0.5 : 1,
                        }}
                        title={data?.disabled?'Upcoming':''}
                    >
                        <p className="turbo m-0" >{data.num}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default InvestBox
