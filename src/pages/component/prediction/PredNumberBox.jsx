import React from 'react'
import { predNumBox } from '.'

const PredNumberBox = () => {
  return (
    <>
        {
            predNumBox.map((num =>
                <div className="prediction_num-item0"
                 key={num.id}>{num.id}</div>
            ))
        }
     </>
  )
}

export default PredNumberBox