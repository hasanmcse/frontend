import React, {useEffect, useState} from 'react';
import '..//common.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {GetToken, RemoveToken} from "../utility/TokenHelper.js";


const AppNavBar = () => {

    const [login,SetLogin]=useState(false);

    useEffect(() => {
        if(GetToken()){
            SetLogin(true)
        }
        else {
            SetLogin(false)
        }
    }, []);

    return (
        <Navbar expand="lg" className="sticky-top">
            <Container fluid>
                <Navbar.Brand>
                        <h2 className='logo'>Design<span>Agency...</span></h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="nav_items  me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink className="nav-link"  to="/">HOME</NavLink>
                        <NavLink className="nav-link"  to="/service">SERVICE</NavLink>
                        <NavLink className="nav-link"  to="/team">TEAM</NavLink>
                        <NavLink className="nav-link"  to="/project">PROJECT</NavLink>
                        <NavLink className="nav-link"  to="/testimonial">TESTIMONIAL</NavLink>
                        {login?(<NavLink className="nav-link"  to="/contact">Contact</NavLink>):(<></>)}
                    </Nav>

                    {login?(<button onClick={()=>{RemoveToken()}} className="btn btn-primary">Logout</button>):( <NavLink className="btn btn-success"  to="/login">Login</NavLink>)}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavBar;