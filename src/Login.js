import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    // programmatically change the url
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // No refreshing
        e.preventDefault()

        // Firebase login stuff
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('./')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        // Firebase register stuff
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Succesfully created a new user with email and password
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img alt="logo" className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>

            <div className="login__container">
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    {/* e.target.value = whatever user type in email */}
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
