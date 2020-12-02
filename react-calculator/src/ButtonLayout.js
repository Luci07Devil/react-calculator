import React from 'react'
export default function ButtonLayout({clickHandler}) {

    const operators = ["÷","+","-","x","="];
    const row1 = ["AC","+/-","%","÷"];
    const otherRows = ["7","8","9","x","4","5","6","-","1","2","3","+","0",".","="];

    function button(data) {
        return <button id={operators.includes(data) ? "orange" : (data==="0" ? "zero" : null)}
                       key={data} value={data} onClick={e => clickHandler(e.target.value)}>{data}</button>
    }

    return (
        <div className='allButtons'>
            <div className="row1">{row1.map(button)}</div>
            <div>{otherRows.map(button)}</div>
        </div>
    )
}
