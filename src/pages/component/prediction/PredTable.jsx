import React from 'react'
import { predTable } from '.'

const PredTable = () => {
    return (
        <>
            <div className="GameRecord__C-head">
                <div className="van-row">
                    <div className="van-col ">Period</div>
                    <div className="van-col ">Number</div>
                    <div className="van-col ">Big Small</div>
                    <div className="van-col ">Color</div>
                </div>
            </div>
            <div className="GameRecord__C-body">
              {
                predTable.map((predTable =>
                    <div className="van-row" key={predTable.id} >
                    <div className="van-col ">{predTable.tableId}</div>
                    <div className="van-col  numcenter">
                        <div className={predTable.numClass} >{predTable.tableNum}</div>
                    </div>
                    <div className="van-col "><span>{predTable.tableText}</span></div>
                    <div className="van-col ">
                        <div className="GameRecord__C-origin">
                            <div className={predTable.clrClass} ></div>
                            <div className={predTable.clrClasstwo}></div>

                        </div>
                    </div>
                </div>
                ))
              }

            </div>
        </>
    )
}

export default PredTable