import React from 'react';
import "../styles/Home.css";

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
                <div className = "col-6">TheHut</div>
                <div className = "col-6">blabber</div>
            </div>
            <div className = "row">
                <div className = "col-6">TheHut Info</div>
                <div className = "col-6">blabber Info</div>
            </div>
            <div className = "row">
                <div className = "col-12">
                    <div className = "home-title">technologies</div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-12 d-flex">
                    <div>Javascript</div>
                    <div>React</div>
                    <div>Ruby</div>
                    <div>Ruby On Rails</div>
                    <div>SQL</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>Bootstrap</div>
                    <div>Webpack</div>
                    <div>Heroku</div>
                    <div>NPM</div>
                    <div>git</div>
                    <div>API</div>
                </div>
            </div>
            <hr/>
            <div className = "row">
                <div className = "col-12">
                    <div className = "home-title">Contact:</div>
                    <div className = "home-info">Email, and a github logo</div>
                    <div>jegrieve7@gmail.com</div>
                    <div>Logo for jegrieve github</div>
                </div>
            </div>
        </div>
    )
};
export default Home;