import React from 'react';
import "../styles/Navbar.css";

const Navbar = () => {

    return (
        <div className = "navbar d-flex justify-content-center">
            <div className = "nav-items d-flex justify-content-around align-items-center" >
                <div>
                    <div className = "home-name">James Grieve</div>
                    <div className = "home-dev">Full Stack Developer</div>
                </div>
                <div className = "nav-item-link">Home</div>
                <div className = "nav-item-link">Projects</div>
                <div className = "nav-item-link">Contact</div>
            </div>

        </div>
    )
};
export default Navbar;