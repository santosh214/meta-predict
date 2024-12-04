import React from 'react'
import states from '../../../assets/json-data/data-reslutstate'

const ResultText = () => {
    return (
        <>
            {
                states.map((state =>
                    <div className="web_system_stats" key={state.id} >
                        <span className="main_title">{state.title}</span>
                        <span className="sys_sub_title" >
                            <span>{state.text}</span>
                        </span>
                    </div>

                ))

            }
        </>
    )
}

export default ResultText