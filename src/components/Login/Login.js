import React from 'react';
import { getAuth } from "firebase/auth";
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from "react";
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const { processLogin } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const auth = getAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }

        processLogin(email, password)

        history.push(redirect_uri);


    };

    const handleEmailChange = e => {
       setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
       setPassword(e.target.value)
    }

    return (
        <div>
            <div className="col-md-4 offset-md-4 mt-5 mb-5 pb-5 text-center login-form">
                <div className="p-5">
                    <form className="pb-2" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <input type="email" onBlur={handleEmailChange} className="form-control" name="" id="" placeholder="Your Email" />
                        <br />
                        <input onBlur={handlePasswordChange} type="password" className="form-control" name="" id="" placeholder="Your Password" />
                        <br />

                        <div className="d-grid gap-2">
                          <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                        <p>Not register yet? <Link to="/register">Create Account</Link></p>
                        <div>-------or-------</div>
                        <br/>
                    <button
                        className="btn-regular"
                        onClick={handleGoogleLogin}
                    >Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;