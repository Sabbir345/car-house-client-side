import { getAuth } from "firebase/auth";
import { useState } from "react";
import React from 'react';
import { Link,useLocation, useHistory  } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Register.css';

const Register = () => {
    const { registerNewUser } = useFirebase();
    const [currentUser, setCurrentUser] = useState(null);   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const auth = getAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length == 0) {
          setError('Name field is requird.')
          return;
        }

        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }

        registerNewUser(email, password,name)

        history.push(redirect_uri);


    };
    
    const handleName = e => {
       setName(e.target.value);
    }
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
                        <h2>Register</h2>
                        <div className="row mb-3 text-danger">{error}</div>
                        <input onBlur={handleName} type="text"  className="form-control" name="" id="" placeholder="Your Name" />
                        <br />
                        <input onBlur={handleEmailChange} type="email"  className="form-control" name="" id="" placeholder="Your Email" required />
                        <br />
                        <input onBlur={handlePasswordChange} type="password" className="form-control" name="" id="" placeholder="Your Password" />
                        <br />
                        <div className="d-grid gap-2">
                          <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;