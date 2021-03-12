import React, {useState, useEffect} from "react";

import './App.css';
import CurrencyExchange from "./CurrencyExchange";


// https://warm-harbor-43713.herokuapp.com/
const url = " https://warm-harbor-43713.herokuapp.com/http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json"



const App = () =>{

  const [rate,setRate] = useState({});


  useEffect( () => {

   getData()
   
  },[]);


  const getData=()=>{
   return  fetch(url)
      .then(response => response.json())
      .then(result =>  setRate(result))
        .catch(e => console.log(e));



  }


  return (
    <div className="App">
     <h1>Remitly interniship recuritment task</h1>

    <CurrencyExchange 
      rate={rate}
    />

    <footer><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></footer>
    </div>
  );
}

export default App;
