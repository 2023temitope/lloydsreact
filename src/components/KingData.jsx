import axios from "axios";
import { useState, useEffect } from "react";



function KingData() {
    const [Kings, setKings] = useState([])
    const [filter, setFilter] = useState("")
//const[isLoading,setIsLoading]=useState(false)-extension of the exercise
    function getData() {
        //setIsLoading(true)-extension of the exercise
        axios.get(("https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json"))
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))

           // useEffect(() => {
              //  getData()
             //  },[])
    }
    const KingsComponents = []
    for (const king of Kings) {
        if (filter === "" || king.nm.toLowerCase().startsWith(filter.toLowerCase()))
            KingsComponents.push(
                <div>
                    key={king.nm}
                    <h4>Name:{king.nm}</h4>
                    <p>{king.cty}</p>
                    <p>{king.hse}</p>
                    <p>{king.yrs}</p>

                </div>
            )
    }  
   // if (isLoading) {   -exercise extension
        //return(<h1>LOADING</h1>)-exercise extension
    
    if (Kings.length == 0) {
        return (
            <div>
                < h1>hello world</h1>
                <>Kings</>
                <button onClick={() => getData()}>GetData</button>
            </div>)
    } else {
        return (
            <div>
                < h1>hello world</h1>
                <>Kings</>
                <input value={filter} onChange={e => setFilter(e.target.value)}></input>
                {KingsComponents}
    
                </div>)
    function handleChange(event) {

        console.log("Event:", event);
        console.log("Target:", event.Target);
        console.log("Value:", event.target.value);
        setFilter(event.target.value);
        
    }
         
}
//return(
// <div>
//<h1>Kings</h1>
// {Kings.length==0&&<button onClick={getData}>GetData</button>}
// <input value={filter} onChange={e=> setFilter(e.target.value)}></input>
// {KingsComponents}
//</div>


}
export default KingData;