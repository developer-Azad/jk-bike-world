
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Alert } from '@mui/material';
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';
import Footer from '../../Shared/Footer/Footer';
import { Box } from '@mui/system';

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
        <>
        <Box sx={{p: '30px'}} className="mui-form">
            <Grid container >
            <Grid item 
            spacing={0}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <Typography className="heading" variant="h4" gutterBottom>Please Login</Typography>
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
                 <br />
                 <NavLink style={{textDecoration: 'none'}} to="/register">
                     <div  className="text-please">
                     <Button sx={{color: 'blue'}} variant="text">New User? Please Register
                 </Button>
                     </div>
                
                </NavLink>
                {isLoading && <CircularProgress/>}
             {user?.email && <Alert severity="success">Login successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
             </form>
             <p>-------------------------------------</p>
             <div className="google-btn">
             <Button onClick={handleGoogleLogin} 
                 variant="contained">Google Sign In
            </Button></div> 
          </Grid> 
          </Grid>
        </Box>
        <Box>
          <Footer></Footer>
          </Box>
          </>
    );
};

export default Login;