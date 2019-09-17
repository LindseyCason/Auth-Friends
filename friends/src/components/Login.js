import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login =(props)=>{
    const [state, setState] = useState({ username: "", password: ""});
    // initialState = {
    //     credentials: {
    //         username: "",
    //         password: ""
    //     }
    // };

   const handleChange = e => {
        setState(
            {...state.credentials,
            [e.target.name]: e.target.value}
        );
    };//closing handleChange

  const login = e => {
        e.preventDefault();
        //note from GP: // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
        .post("/login", state.credentials)
        .then(res=>{
            console.log(res, "this is from login page");
            localStorage.setItem("token", res.data.payload); //this could be wrong, can't see console log
            props.history.push("/protected");
        })
        .catch(error => console.log("error", error));
       
    }//closes login

    return(
        <>
        <form onSubmit={login}>
            <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
            />
            <input
            type="text"
            name="password"
            value={state.password}
            onChange={handleChange}
            />
            <button>Log In!</button>
        </form>
        </>
    );//closes return with form enclosed

}//Closes Login component

export default Login;