import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, authError, loginUser, isLoading} = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <div className="login">
            <div>
                <h2>Login please</h2>
                <h3>{authError}</h3>
                <form onSubmit={handleLogin}>
                    <input className="input-field" onBlur={handleOnChange} type="email" name="email"
                     placeholder="Your Email" required/>
                     <br /><br />
                    <input className="input-field" onBlur={handleOnChange} type="password" name="password"
                     placeholder="password" required/>
                    <br /><br />
                    
                    <Button  sx={{width: '75%', m: 1}} type="submit"
                 variant="contained">Login</Button>

                {isLoading && 
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
                }
             {user?.email && <Alert severity="success">Login successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <p>New To JK Wrold? <Link className="link-color" style={{color:''}} to="/register">Register</Link></p>
                {/* <div>-----------------or----------------</div>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
                </div> */}
        </div>
        </div>
    );
};

export default Login;