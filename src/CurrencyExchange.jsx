import React,{useState} from "react";

import uk from './images/uk.png';
import pl from './images/poland.png';



const defaultValue = "";

const CurrencyExchange = ({rate}) => 
{
  
    const [plnValue,setPlnValue] = useState(defaultValue);
    const [gbpValue,setGbpValue] = useState(defaultValue);

    const currentRate = rate.rates ? rate.rates[0].mid : null;

  

    const handleValueChange = (e,currency) => {
        

        const regex = /^[0-9]*\.{0,1}[0-9]*$/i;

        let value = e.target.value;

        if(!regex.test(value)){
            alert("Incorrect input! \n It should be numeric input!");
            return;
        }

        let index = value.indexOf(".");
        if(index!==-1){
            value = value.slice(0,index+3);
        }

       


        if(currency === "gbp"){
            setPlnValue(String((Number(value) * currentRate).toFixed(2)));
            setGbpValue(String(value));
        }else if(currency==="pln"){
            setGbpValue(String((Number(value) / currentRate).toFixed(2)));
            setPlnValue(String(value));
        }


      

    }

 

    return( <section>
        <form >

            <div>
            <p>You send</p>
            <label htmlFor="gbp" >
            <img src={uk} alt="uk"/>
                <input value={gbpValue} onChange={(e,)=>handleValueChange(e,"gbp")} type="text" id="gbp"/>
                <span>GBP</span>

            </label>
            </div>

            <div>
            <p>They receive</p>
            <label htmlFor="pln" >
            <img src={pl} alt="pl"/>
                <input value={plnValue} onChange={(e)=>handleValueChange(e,"pln")} type="text" id="pln"/>
                <span>PLN</span>
            </label>
            </div>

         



        </form>

        <p>1 GBP = <span>{currentRate ? currentRate.toFixed(2) : "-.--"} PLN</span></p>
        
    </section>);
}

export default CurrencyExchange;