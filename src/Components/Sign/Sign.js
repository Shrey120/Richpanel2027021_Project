import React from "react";
import './n.css';

import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword} from "firebase/auth"
import axios from 'axios'
import {Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const [values, setvalues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errmsg, seterrmsg] = useState("");
    const [sub, subdis] = useState(false);
    
    const postdata = async (e) => {
        
        if (!values.name || !values.email || !values.password) {
            seterrmsg("Fill All fields");
            return;
        }
        seterrmsg("");
        subdis(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async(res) => {
                subdis(false);
                navigate("/Billingcard");
            })
            .catch((err) => {
                
                subdis(false);
                console.log("Error", err);
            });
        
    }
         
         
    return (
        <div class="box">
            <p class="cr">Login to your account</p>
            <form onSubmit={postdata}>
                <div class="input-main">
                    <label htmlFor="name">Email</label>
                        <br></br>
                    <input type="email" placeholder="Enter Email" autocomplete="off" name="email" onChange={(e) => setvalues((prev) => ({ ...prev, email: e.target.value }))}/>
                </div>
                <div class="input-main">
                    <label htmlFor="name">
                        Password
                    </label>
                        <br></br>
                    <input type="password" placeholder="Enter Password" autocomplete="off" name="password" onChange={(e) => setvalues((prev) => ({ ...prev, email: e.target.value }))}/>
                    </div>
                        <label><input type="checkbox"/>Remember Me</label>
                        <br></br>
            </form>
                <button class="s" type="submit" >Login </button>
            <p class ="ll">New to MyApp? <Link to="/register">Sign up</Link></p>
        </div>
    )
}
    export default Login