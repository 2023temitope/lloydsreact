import axios from"axios";
import { useEffect,useState } from "react";



function PostRequest() {
const[user,setUser]= useState("No user Yet")
const[message,setMessage]=useState([])
const[ourMessage,setOurMessage]= useState("")


useEffect(()=> {
    axios.post("http://165.120.188.147:2514/createAccount").then((res)=>{
        setUser(res.data.user)
        
    }
    )
    .catch(console.log)
},

[])
function getMessage(){
    axios.get("http://165.120.188.147.2514/getMessage").then((res)=> setMessage(res.data))

.catch(console.log)
}
const htmlMessage=[];
    for (let m of message){
        htmlMessage.push(<p>Name:{m.user}<br/>Message:{m.message}</p>)
    }
 function sendMessage(){
axios.post("http://165.120.188.147:2514/sendMessage",{user:user,message:ourMessage})
.then( ()=> {getMessage()})
.catch(console.log)


 }
    return ( 
        <div>
            <h1>My Message Board:{user}</h1>
        </div>
     );
}

export default PostRequest;