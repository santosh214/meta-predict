import React from 'react'
import tooltips from '../../../assets/json-data/data-tooltip'

const ToolTips = () => {
    return (
        <>
            <div className="results">
              {
                tooltips.map((tooltip => 
                    <div className={ tooltip.resultClass} key={tooltip.id} >
                    <svg viewBox="0 0 12 9" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m7.04 1.338 4.306 5.535A1.318 1.318 0 0 1 10.306 9H1.694a1.318 1.318 0 0 1-1.04-2.127L4.96 1.338a1.318 1.318 0 0 1 2.08 0z"
                            fill-rule="evenodd"></path>
                    </svg>
                    <div className="rates_tooltip" >
                        <a href="#">
                            <div className="hash_title">
                                <p>{ tooltip.toolBtn }</p>
                            </div>
                        </a>
                        <div className="row_title"> {tooltip.rowTitle }</div>
                        <div className="row_value entry"> { tooltip.rowValue }</div>
                        <div className="row_title"> {tooltip.endTitle }</div>
                        <div className="row_value expiry"> {tooltip.rowExpiry}</div>
                    </div>
                </div>
                ))
              }
              </div>
        </>
    )
}

export default ToolTips