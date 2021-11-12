
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Alert } from '@mui/material';
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, authError, signInWithGoogle, loginUser, isLoading} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container className="mui-form">
            <Grid container spacing={2}>
            <Grid item 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <Typography variant="h4" gutterBottom>Please Login</Typography>
             <form onSubmit={handleLogin}>
                <TextField
                sx={{width: '75%', m: 1}}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
                />
                <br />
                <TextField
                sx={{width: '75%', m: 1}}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
                />
                <br />
                <br />
                <Button sx={{width: '75%', m: 1}} type="submit"
                 variant="contained">Login</Button>
                 <br />
                 
                 <NavLink style={{textDecoration: 'none'}} to="/register">
                <Button  
                 variant="text">New User? Please Register
                 </Button>
                </NavLink>
                {isLoading && <CircularProgress/>}
             {user?.email && <Alert severity="success">Login successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
             </form>
             {/* <p>-------------------------------------</p> */}
             {/* <Button onClick={handleGoogleLogin} 
                 variant="contained">Google Sign In
                 </Button> */}
          </Grid>
          </Grid>
        </Container>
    );
};

export default Login;