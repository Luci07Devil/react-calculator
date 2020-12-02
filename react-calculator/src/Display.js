import React from 'react'

export default function Display({display,setDisplay}) {

    return (
        <div>
            <input type="text" pattern="[0-9x+-÷]" value={display} onChange={e => setDisplay(e.target.value)} id="display"></input> 
        </div>
    )
}
