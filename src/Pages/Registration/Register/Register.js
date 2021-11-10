import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, isLoading, registerUser, authError} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    
    const handleNewRegister = e => {
        if(loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        alert('successfully registered');
        registerUser(loginData.email, loginData.password, loginData.name);
        e.preventDefault();
    }
    
    return (
        <div className="login">
            <div>
                <h2>Please Register</h2>
                <h3>{}</h3>
                <form onSubmit={handleNewRegister}>
                    <input className="input-field" onBlur={handleOnChange} type="text" name="name"
                     placeholder="Your Name" required />
                     <br /><br />
                    <input className="input-field" onBlur={handleOnChange} type="email" name="email"
                     placeholder="Your Email" required/>
                     <br /><br />
                    <input className="input-field" onBlur={handleOnChange} type="password" name="password"
                     placeholder="password" required/>
                    <br /><br />
                    <input className="input-field" onBlur={handleOnChange} type="password" name="password2"
                     placeholder="Confirm password" required/>
                    <br />
                    <input className="btn btn-warning my-3" type="submit" value="Submit" />
                </form>
                {isLoading && 
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
                }
                {user?.email && 
                <div className="alert alert-success" role="alert">
                Successfully Registered
              </div>
                }
                {authError && 
                <div className="alert alert-success" role="alert">
                {authError}
              </div>
                }
                <p>Already registerd? <Link className="link-color" style={{color:''}} to="/login">Login</Link></p>
                {/* <div>-----------------or----------------</div>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
                </div> */}
        </div>
        </div>
    );
};

export default Register;