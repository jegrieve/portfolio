import React from 'react';
import "../styles/Home.css";
import TheHut1 from "../assets/TheHut1.PNG";
import blabber1 from "../assets/blabber1.PNG";
import GithubLogo from "../assets/Github-logo.png";
import { NavHashLink } from 'react-router-hash-link';

const Home = () => {

    return (
        <div className = "homepage-container container">
            <div className = "row d-flex justify-content-center home-title-info">
                <div className = "col-md-8 d-flex justify-content-center">
                    <div className = "home-title">Hey there, I'm James</div>
                </div>
                <div className = "col-md-8 d-flex justify-content-center">
                    <div className = "home-info">
                        I'm a full stack developer currently based in the greater Vancouver area. I am passionate about working on development projects, and learning
                        new technologies.
                    </div>
                </div>
            </div>
            <hr/>
            <div className = "row home-projects-info">
                <div className = "col-md-12">
                    <div className = "home-title">Projects</div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-md-12 col-lg-6">
                    <div className = "home-project-title home-hut">TheHut</div>
                    <div>
                        <img className = "zoom-in" src = {TheHut1} width = "450" alt = "TheHut mainpage"/>
                    </div>
                    <div className = "home-body">
                    TheHut is a social website where users share text, images and videos.
                    </div>
                    <div>
                        <NavHashLink to = {"/projects#TheHut"} > 
                            <button className = "btn btn-warning the-hut-details-btn">View More Details</button>
                        </NavHashLink>
                    </div>
                </div>
                <div className = "col-md-12 col-lg-6">
                    <div className = "home-project-title home-blabber">blabber</div>
                    <div>
                        <img className = "zoom-in" src = {blabber1} width = "450" alt = "blabber homepage"/>
                    </div>
                    <div className = "home-body">
                    blabber is a community messaging app, where users can send messages to others, in various communities.
                    </div>
                    <div>
                        <NavHashLink to = {"/projects#blabber"} > 
                            <button className = "btn btn-danger blabber-details-btn">View More Details</button>
                        </NavHashLink>
                    </div>
                </div>
            </div>

            <hr className = "margin-top" />
            <div className = "row home-technologies-info">
                <div className = "col-md-12">
                    <div className = "home-title">Technologies</div>
                </div>
            </div>
            <div className = "row home-technologies-items">
                <div className = "col-md-12">
                    <div className = "home-tech-item">Javascript</div>
                    <div className = "home-tech-item">React</div>
                    <div className = "home-tech-item">Ruby</div>
                    <div className = "home-tech-item">Ruby On Rails</div>
                    <div className = "home-tech-item">HTML</div>
                    <div className = "home-tech-item">CSS</div>
                    <div className = "home-tech-item">Sass</div>
                    <div className = "home-tech-item">SQL</div>
                    <div className = "home-tech-item">Bootstrap</div>
                    <div className = "home-tech-item">Webpack</div>
                    <div className = "home-tech-item">Heroku</div>
                    <div className = "home-tech-item">npm</div>
                    <div className = "home-tech-item">git</div>
                    <div className = "home-tech-item">API</div>
                    <div className = "home-tech-item">AWS</div>
                    <div className = "home-tech-item">Jest</div>
                    <div className = "home-tech-item">React Testing Library</div>
                    <div className = "home-tech-item">RSpec</div>
                </div>
            </div>
            <hr/>
            <div className = "row home-contact-info">
                <div className = "col-md-6">
                    <div className = "home-title">Contact</div>
                    <div className = "home-info">
                        Send me an email at <a className = "contact-email" href="mailto: jegrieve7@gmail.com" target="_blank">jegrieve7@gmail.com</a>
                    </div>
                </div>
                <div className = "col-md-6 home-github d-flex align-items-center">
                    <a href = "https://github.com/jegrieve">
                        <img className = "github-logo" src = {GithubLogo} width = "50" alt = "Github logo link"/>
                    </a>
                </div>
            </div>
        </div>
    )
};
export default Home;