import axios from "axios";
import React, { useEffect } from "react";


function Home(){
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:3001/home')
        .then(result =>{console.log(result)
            if(result.data !== "Success"){
                // navigate('/login')
            }
        })
        .catch(err => console.log(err))
    })
    return(
        <h1>Home Component</h1>
    )
}

export default Home;