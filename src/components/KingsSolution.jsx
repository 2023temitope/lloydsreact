//import Cohort from './data/Cohort.json';
import kings from "../data/kings.json"

//import kings from "./components/kingssolutions"
//import './App.css';
//react component called App
function KingsSolutions() {

  const Kingscomponents = []

  for (const prince of kings) {
    console.log("Kings:", prince)

    Kingscomponents.push(
      
      <p>Name:{prince.name}</p>,
      <p>Country:{prince.country}</p>,
      <p>House:{prince.house}</p>,
      <p>Years:{prince.years}</p>,
    )


  }
  return (
    <div>
      <h2>Kings</h2>
      {Kingscomponents}

    </div>
  )

}
export default KingsSolutions