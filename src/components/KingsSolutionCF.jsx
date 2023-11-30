import { useState } from "react";
import King from "./Kings";
import axios from "axios";
function KingsSolutionCF() {
    const [filter, setFilter] = useState("")
    const [kings, setKings] = useState([])

    function getKings() {
       
        axios.get(("https://raw.githubusercontent.com/JHarry444/LBG-React-Demo/main/src/data/kings.json"))
    .then((response) => {
        setKings(response.data)
    })

            }
    const kingscomponents = []
    for (const king of kings) {
        if (filter !== "" && king.name !== filter) continue
        console.log("Kings:", king)
        kingscomponents.push(
            <King
                Key={king.nm + "" + king.years}
                name={king.nm}
                country={king.cty}
                house={king.hse}
                years={king.yrs}
            />
        )
    }
    function handleChange(event) {
        console.log("Event:", event);
        console.log("Target:", event.Target);
        console.log("Value:", event.target.value);
        setFilter(event.target.value);
    }

           
   

    return (
        <div>
            <h2>Kings</h2>
           
            <button onClick={() => getKings()}> GetKings</button>
            { kingscomponents }
        </div>
    );

}
export default KingsSolutionCF;
