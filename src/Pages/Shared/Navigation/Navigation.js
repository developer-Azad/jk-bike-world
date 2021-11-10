import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Navigation.css'

const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
        <>
        <Navbar className="bg-primary" variant="dark">
          <Container>
          <Link to="/home"><Navbar.Brand >Navbar</Navbar.Brand></Link>
          <Nav className="me-auto">
            <NavLink className="link" to="/home">Home</NavLink>
            <NavLink className="link" to="/dashboard">Dashboard</NavLink>
            <NavLink className="link" to="/home">Home</NavLink>
          </Nav>
          {
            user?.email ?
            <button className="btn-primary border-none" 
                onClick={logOut}>Signed : {user.displayName} <span className="text-danger fw-bold">Log Out</span></button>
                : <Link to="/login" className="text-white">Login </Link>
          }
          {/* <NavLink className="link"  to="/login">Login</NavLink> */}
          
          </Container>
        </Navbar>
      </>
    );
};

export default Navigation;