function MyButtonExer() {
    function Excellent() {
        alert("Excel!");
        console.log("Excellent:")
    }
 
    return (
        <div>
            <button>Excel1</button>
            <button>Excel2</button>
            <button>Excel3</button>
            <button onClick={Excellent}>Excel1</button>
            <button onClick={function(){console.log("Excel2)");}}>Excel2</button>
            <button onClick={(Excellent)=> alert("Excellent")}>Excel3</button>
           
                   </div>

    );
}

export default MyButtonExer;  