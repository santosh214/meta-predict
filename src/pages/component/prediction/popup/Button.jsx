import React from 'react'
const Button = ({ id, buttonText, onClick, btnClass }) => {
    return (
        <>
            <div >
                <button className={btnClass}
                    onClick={() => onClick(id)}>
                    {buttonText}</button>
            </div>
        </>
    )
}

export default Button