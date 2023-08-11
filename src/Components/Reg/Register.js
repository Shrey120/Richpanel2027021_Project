import React from "react";
import './r.css';

import { useState } from "react";
import { auth } from "../../firebase";
import {createUserWithEmailAndPassword ,updateProfile} from "firebase/auth"
import axios from 'axios'
import {Link, useNavigate } from "react-router-dom"

const Home = () => {
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
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async(res) => {
                subdis(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate("/Billingcard");
            })
            .catch((err) => {
                
                subdis(false);
                console.log("Error", err);
            });
        
    }
         
    return (
        <div class="form-box">
            <p class="cr">Create Account</p>
            <form method="POST">
                <div class="input-main">
                    <label htmlFor="email">
                        Name
                        </label>
                        <br></br>
                    <input type="text" name="name" placeholder="Enter Name" autocomplete="off" 
                        onChange={(e) => setvalues((prev) => ({ ...prev, name: e.target.value }))} />
                </div>
                <div class="input-main">
                    <label>
                        Email
                    </label>
                        <br></br>
                    <input type="email" placeholder="Enter Email" autocomplete="off" name="email"
                    onChange={(e) => setvalues((prev) => ({ ...prev, email: e.target.value }))} />
                </div>
                <div class="input-main">
                    <label >
                        Password
                    </label>
                        <br></br>
                    <input type="password" placeholder="Enter Password" autocomplete="off" name="password"
                    onChange={(e) => setvalues((prev) => ({ ...prev, password: e.target.value }))} />
                    </div>
                        <label><input type="checkbox"/>Remember Me</label>
                
                        <br></br>
                <button disabled={sub} onClick={postdata} class="sub" type="submit" >Register</button>
            </form>
            <p class="ll">Already have an acount?<Link to="/login">Login</Link></p>
        </div>
    )
}
    export default Home