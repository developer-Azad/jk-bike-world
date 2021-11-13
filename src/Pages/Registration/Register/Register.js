import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Alert } from '@mui/material';
import './Register.css'
import { Box } from '@mui/system';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, isLoading, registerUser, authError} = useAuth();

    const handleOnBlur = e => {
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
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    
    return (
        <>
        <Box className="mui-form">
        <Grid container spacing={2}>
        <Grid item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
            <Typography variant="h4" gutterBottom>Register</Typography>
         {!isLoading &&
             <form onSubmit={handleNewRegister}>
            <TextField
            sx={{width: '75%', m: 1}}
            id="standard-basic"
            label="Your Name"
            name="name"
            onBlur={handleOnBlur}
            variant="standard"
            />
            <br />
            <TextField
            sx={{width: '75%', m: 1}}
            id="standard-basic"
            label="Your Email"
            name="email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
            />
            <br />
            <TextField
            sx={{width: '75%', m: 1}}
            id="standard-basic"
            label="Your Password"
            type="password"
            name="password"
            onBlur={handleOnBlur}
            variant="standard"
            />
            <br />
            <TextField
            sx={{width: '75%', m: 1}}
            id="standard-basic"
            label="Retype Your Password"
            type="password"
            name="password2"
            onBlur={handleOnBlur}
            variant="standard"
            />
            <br />
            <br />
            <Button  sx={{width: '75%'}} type="submit"
             variant="contained">Register</Button>
             <br />
             <NavLink style={{textDecoration: 'none'}} to="/login">
            <Button  
             variant="text">Already Registered? Please Login</Button>
            </NavLink>
         </form>}
         {isLoading && <CircularProgress/>}
         {user?.email && <Alert severity="success">successfully registered</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
      </Grid>
      </Grid>
    </Box>
    <Footer></Footer>
    </>
    );
};

export default Register;