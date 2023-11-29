import { useState } from "react";

//components name MUST be capitalised
function Cohort (props) {

    const[filter,setFilter]= useState("");
     console.log("Filter:", filter);
     constcohortComponebts=[];
      for (const colleague of cohort){
        if (filter.length>0 && colleague.name ==filter) continue;
        colleaguecomponents.push(
            <Cohort key={colleague.name +""+ colleague.job}  name={collegue.name}  age={colleague.age}   job={colleague.job}/>)
        ;
      }


      function handlechange (event){
      console.log("Event:", event)
      console.log("Target:", event.target)
      console.log("Value:", event.target.value)

      }
    return(
    
    <div>
        <h2>Cohort</h2>
        <input type="text" value={filter} onChange={handlechange}/>
        {CohortComponents}
        </div>
        );
        } 
        export default Cohort;

    
