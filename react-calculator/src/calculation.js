export default function calculation(newInput,{setDisplay}) {
    let val=0;

     if(newInput.includes("+")){
        const values = newInput.split("+"); 
        val = Number(values[0])+Number(values[1]);
    }

    else if(newInput.includes("÷")){
        const values = newInput.split("÷");
        val = Number(values[0])/Number(values[1]);
        }

   else if(newInput.includes("x")){
        const values = newInput.split("x");
        val = Number(values[0])*Number(values[1]);
        }
    
    else{
        let filter = newInput.split("-").filter(Boolean); //removes empty elements
        val = parseInt(newInput) - filter[1];
    }    
                
    if(isNaN(val)){setDisplay("Invalid"); return;}

    return setDisplay(String(val));   
}
