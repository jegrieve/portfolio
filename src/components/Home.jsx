import React from 'react';
import "../styles/Home.css";
import TheHut1 from "../assets/TheHut1.PNG";
import blabber1 from "../assets/blabber1.PNG";
import GithubLogo from "../assets/Github-logo.png";

const Home = () => {

    return (
        <div className = "homepage-container container">
            <div className = "row d-flex justify-content-center">
                <div className = "col-8 d-flex justify-content-center">
                    <div className = "home-title">Hey, I'm James</div>
                </div>
                <div className = "col-8  d-flex justify-content-center">
                    <div className = "home-info">
                        I am a Fullstack Developer currently looking for opportunities(contact only section) in Fullstack development. I am passionate about creating different programming projects.
                    </div>
                </div>
            </div>
            <hr/>
            <div className = "row">
                <div className = "col-12">
                    <div className = "home-title">Projects</div>
                    <div className = "home-info">Projects i've worked on and talk about the stack.</div>
                </div>
            </div>

            <div className = "row">
                <div className = "col-6">
                    <div className = "home-project-title home-hut">TheHut</div>
                </div>
                <div className = "col-6">
                    <div className = "home-project-title home-blabber">blabber</div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-6">
                    <img src = {TheHut1} width = "450" alt = "TheHut mainpage"/>
                </div>
                <div className = "col-6">
                    <img src = {blabber1} width = "450" alt = "blabber homepage"/>
                </div>
            </div>
            <div className = "row">
                <div className = "col-6 home-body">
                    TheHut is a social website where users can post text, links, images and videos.
                    Posts can then be sorted by most liked, newest, etc.
                </div>
                <div className = "col-6 home-body">
                    blabber is a social website, where users can send messages to others.
                    Join servers, create channels, and chat with others.
                </div>
            </div>
            <div className = "row">
                <div className = "col-12">
                    <div className = "home-title">Technologies</div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-12 d-flex justify-content-between">
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
                    <div className = "home-tech-item">Api</div>
                    <div className = "home-tech-item">AWS</div>
                    <div className = "home-tech-item">Jest</div>
                    <div className = "home-tech-item">React Testing Library</div>
                    <div className = "home-tech-item">RSpec</div>
                </div>
            </div>
            <hr/>
            <div className = "row">
                <div className = "col-6">
                    <div className = "home-title">Contact</div>
                    <div className = "home-info">
                        Send me an email at <a className = "contact-email" href="mailto: jegrieve7@gmail.com" target="_blank">jegrieve7@gmail.com</a>
                    </div>
                </div>
                <div className = "col-6 home-github d-flex align-items-center">
                    <a href = "https://github.com/jegrieve">
                        <img className = "github-logo" src = {GithubLogo} width = "50" alt = "Github logo link"/>
                    </a>
                </div>
            </div>
        </div>
    )
};
export default Home;