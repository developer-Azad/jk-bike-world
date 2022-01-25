import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
          // <div className="navbar">
          //   <Box sx={{ flexGrow: 1 }} >
              <AppBar position="sticky">
                <Toolbar className="nav">
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
                >
               <MenuIcon />
             </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           JK Bike World
          </Typography>
          <NavLink  style={{textDecoration: 'none'}} to="/home"><Button color="inherit">Home</Button></NavLink>
          {
            user?.email ? 
            <Box>
          <Button onClick={logOut} >Log out</Button>
          <NavLink style={{textDecoration: 'none'}} to="/dashboard">
          <Button color="inherit">Dashboard</Button>
          </NavLink>
          </Box>
            :
            <NavLink style={{textDecoration: 'none'}} to="/login">
          <Button color="inherit">Login</Button>
          </NavLink>
          
          }
          
        </Toolbar>
      </AppBar>
    // </Box>
    // </div>
    );
};

export default Navigation;
