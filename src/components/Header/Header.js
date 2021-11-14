import React from 'react';
import { Navbar,Container,NavbarBrand,Nav,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "orange"
    }

    const { user, logout } = useFirebase();

    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
              <Container>
                <NavbarBrand to="/home" className="app-title">DCH</NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                        <NavLink to="/explore" activeStyle={activeStyle}>Explore</NavLink>
                        {user?.email && <NavLink to="/dashboard" activeStyle={activeStyle}>Dashboard</NavLink> }  
                        {!user?.email && <NavLink to="/login" activeStyle={activeStyle}>Login</NavLink> }
                        {!user?.email && <NavLink to="/register">Register</NavLink> }
                        <span className="login-user">{user.displayName} </span>
                        {user?.email &&  <Button onClick={logout} variant="info">log out</Button> }
                    </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;