//import Cohort from './data/Cohort.json';
import kings from "../data/kings.json"
import King from "./Kings";
//import kings from "./components/kingssolutions"
//import './App.css';
//react component called App
function KingsSolutionsExer() {

  const kingscomponents = []

  for (const king of kings) {
   // if (filter!== ""&& king.name !==filter) continue;
    console.log("Kings:", king)
 //if(filter!== "" && !king.name.toLowerCase().startsWith(filter.toLoweCase()))continue;
 //if (filter !== "" && !king.name.toLowerCase().includes(filter.toLoweCase()))continue;// skips the rest of the current loop
    kingscomponents.push(
      <King
      Key ={king.name +""+ king.years}
      name={king.name}
      country={king.country}
      house={king.house}
      years={king.years}
      />
    )


  }
  function handleChange(event) {
    //setFilter(event.target.value);
  }
  return (
    <div>
      <h2>Kings</h2>
     {/* <input type="text" placeholder="Enter filter here" value={filter} onChange={handleChange} /> */}
      {/*<input type="text" placeholder="Enter filter here"value={filter} onChange={e => setfilter(e.target.value)}/> */}

  
  
  
  {kingscomponents}

    </div>
  );

}
export default KingsSolutionsExer ;
