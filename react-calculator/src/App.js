import React, { useState } from 'react';
import Display from './Display';
import calculation from './calculation';
import ButtonLayout from './ButtonLayout';

function App() {

  const [display,setDisplay] = useState('0');

  function clickHandler(input){
    if(input==="AC"){setDisplay('0'); return;}
    if(input==="+/-"){setDisplay(String(Number(display)*-1));return;}
    if(input==="%"){setDisplay(String(Number(display)/100));return;}
    if((display==="0")&&(input!==".")){setDisplay(input); return;}
    setDisplay(prevState => prevState+input);
    if(input==="="){calculation(display,{setDisplay});}
  }

  return (
    <div className="app">
     <Display setDisplay={setDisplay} display={display}/>
     <ButtonLayout clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
