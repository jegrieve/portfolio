import React from 'react';
import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className = "navbar d-flex justify-content-center">
            <div className = "nav-items d-flex justify-content-around align-items-center" >
                <div>
                    <div className = "home-name">James Grieve</div>
                    <div className = "home-dev">Full Stack Developer</div>
                </div>
                <div className = "nav-item-link">
                    <NavLink className = "nav-item-navlink" to = {"/"}>Home</NavLink>
                </div>
                <div className = "nav-item-link">
                    <NavLink className = "nav-item-navlink" to = {"/projects"}>Projects</NavLink>
                </div>
                <div className = "nav-item-link">
                    <NavLink className = "nav-item-navlink" to = {"/contact"}>Contact</NavLink>
                </div>
            </div>
        </div>
    )
};
export default Navbar;