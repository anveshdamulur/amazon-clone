import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from './fireBase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login =(event) =>{
        event.preventDefault(); // this stops the refresh
        // do the login logic ...
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            // logged in and redirect to homepage
            history.push("/")
        })
        .catch(e => alert(e.message));
    }
    
    const register = (event) =>{
        event.preventDefault(); // this stops the refresh
        // do the register logic ...
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>{
            // created a user and looged in, redirect to homepage
            history.push("/")
        })
        .catch( e =>alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-Mail</h5>
                    <input value={email} name="email" onChange={event => setEmail(event.target.value)} type="text"/>
                    <h5>Password</h5>
                    <input value={password} name="password" onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est maiores mollitia rerum soluta deserunt sint praesentium dolore beatae dignissimos! Reprehenderit ea laudantium consequuntur architecto aut nostrum quibusdam impedit vero.
                </p>
                <button onClick={register} type="submit" className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
