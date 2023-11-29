//remember to import the useState function
import { useState } from "react";

function Counter() {
    // react tracks this value for us
    //count GETS the value from react
    //setCountSETS the value
    //but it is NOT stored here
    const [count, setCount] = useState(0);

    console.log("Count:", count);
    return (<div>
        <input type="number" readOnly value={count} />
        <br />
        <button onClick={() => setCount(count + 5)}>+5</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => setCount(count + -1)}>-1</button>
        <button onClick={() => setCount(count + - 5)}>-5</button>


    </div>);
}
export default Counter;