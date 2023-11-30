
import { useState } from "react";
import  axios  from "axios";

function CatFacts() {
    const [fact, setFact] = useState("");


    function getFact() {
        //Request to aserver
        //NinjaCat facts.com


        axios.get("http://catfact.ninja/fact")
        .then((response) => {
            setFact(response.data.fact)
        })

.catch((error) => {
    console.log(error);
    setFact("There was an error, Please try again");
})

        //setFact("Cats dont always land on their legs")
    }
    return (
        <div>
            <h1>Cat Facts</h1>
            <p>{fact}</p>
            <button onClick={() => getFact()} > GetFact </button>
        </div>
    );
}

export default CatFacts;