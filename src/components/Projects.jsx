import React from 'react';
import "../styles/Projects.css";
import TheHut1 from "../assets/TheHut1.PNG";
import TheHut2 from "../assets/TheHut2.PNG";
import blabber1 from "../assets/blabber1.PNG";
import blabber2 from "../assets/blabber2.PNG";

const Projects = () => {

    return (
        <div className = "projects-container container">
            <div className = "row">
                <div className = "col-lg-12">
                    <div className = "projects-main-title">Projects</div>
                </div>
            </div>
            <hr />
            <div className = "row">
                <div className = "col-lg-12">
                    <div id = "TheHut" className = "projects-title the-hut-title">TheHut</div>
                </div>
            </div>
            <div className = "row projects-padding">
                <div className = "col-lg-6 d-flex justify-content-center">
                    <img className = "responsive-img zoom-in" src = {TheHut1} alt = "TheHut mainpage"/>
                </div>
                <div className = "col-lg-6 d-flex justify-content-center align-items-center">
                    <div className = "projects-body">
                        TheHut is a social website where users choose different boards to
                        share text, images and videos. 
                        <div className = "app-features-title">Features include:</div>
                        <ul className = "app-features">
                            <li>Create/Edit/Delete posts, users, comments, boards, comment replies.</li>
                            <li>Posts can contain text/images/videos.</li>
                            <li>Like posts, and sort by most-liked, newest, etc.</li>
                            <li>Comment on posts, aswell as reply to comments.</li>
                            <li>View posts belonging to a specific board.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className = "row projects-padding">
                <div className = "col-lg-6 d-flex justify-content-center align-items-center">
                    <div className = "projects-body">
                    <div className = "app-features-title">Technologies</div>
                        <ul className = "app-features">
                            <li>Front-end: <span className = "react-colour">React</span> + <span className = "bootstrap-colour">Bootstrap</span></li>
                            <li>Back-end: <span className = "rails-colour">Ruby On Rails</span></li>
                            <li>Web Services: <span className = "aws-colour"> AWS </span>(image hosting), <span className = "heroku-colour">Heroku</span> (app hosting)</li>
                        </ul>
                        <div>Check out the live app <a className = "app-link" href= "https://the-hut.herokuapp.com/" target="_blank">here</a></div>
                        <div>Check out the Github repo <a className = "app-link" href = "https://github.com/jegrieve/TheHut" target="_blank">here</a></div>
                    </div>
                </div>
                <div className = "col-lg-6 d-flex justify-content-center">
                    <img className = "responsive-img zoom-in" src = {TheHut2} alt = "Showing an example post"/>
                </div>
            </div>
            <hr />
            <div className = "row">
                <div className = "col-lg-12">
                    <div id = "blabber" className = "projects-title blabber-title">blabber</div>
                </div>
            </div>
            <div className = "row projects-padding">
                <div className = "col-lg-6 d-flex justify-content-center">
                    <img className = "responsive-img zoom-in" src = {blabber1} alt = "blabber homepage"/>
                </div>
                <div className = "col-lg-6 d-flex justify-content-center align-items-center">
                    <div className = "projects-body">
                        blabber is a community messaging app, where users can send messages to others, in various communities.
                        <div className = "app-features-title">Features include:</div>
                        <ul className = "app-features">
                            <li>Create/Edit/Delete servers, channels, messages, users.</li>
                            <li>Messages can contain text, images, emojis, videos and GIFs.</li>
                            <li>Servers can be favourited and the feed can be sorted-by favourites.</li>
                            <li>View user profiles and recent activity.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className = "row projects-padding  padding-bottom">
                <div className = "col-lg-6 d-flex justify-content-center align-items-center">
                    <div className = "projects-body">
                        <div className = "app-features-title">Technologies</div>
                        <ul className = "app-features">
                            <li>Front-end: <span className = "react-colour">React</span> + <span className = "bootstrap-colour">Bootstrap</span></li>
                            <li>Back-end: <span className = "rails-colour">Ruby On Rails</span></li>
                            <li>Web Services: <span className = "aws-colour"> AWS </span>(image hosting), <span className = "heroku-colour">Heroku</span> (app hosting)</li>
                            <li>Other: <span className = "giphy-colour"> GIPHY API</span></li>
                        </ul>
                        <div>Check out the live app <a className = "app-link" href= "https://blab-ber.herokuapp.com/" target="_blank">here</a></div>
                        <div>Check out the Github repo <a className = "app-link" href= "https://github.com/jegrieve/blabber" target="_blank">here</a></div>
                    </div>
                </div>
                <div className = "col-lg-6 d-flex justify-content-center">
                    <img className = "responsive-img zoom-in" src = {blabber2} alt = "Showing an example channel with messages"/>
                </div>
            </div>
        </div>
    )
};
export default Projects;