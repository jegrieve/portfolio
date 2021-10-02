import React from 'react';
import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className = "site-navbar container">
          <div className = "row">
            <div className = "col-6" >
              <div className = "home-name">James Grieve</div>
              <div className = "home-dev">Full Stack Developer</div>
            </div>
                <div className = "col-6 d-flex justify-content-center align-items-center">
                    <div className = "nav-items d-flex justify-content-around">
                        <NavLink className = "nav-item-navlink" to = {"/"}>Home</NavLink>
                        <NavLink className = "nav-item-navlink" to = {"/projects"}>Projects</NavLink>
                        <NavLink className = "nav-item-navlink" to = {"/contact"}>Contact</NavLink>
                    </div>
                 </div>
             </div>
        </div>
    )
};
export default Navbar;

