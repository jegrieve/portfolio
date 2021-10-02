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
                    <div className = "projects-title the-hut-title">TheHut</div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-lg-6 d-flex justify-content-center">
                    <img className = "responsive-img zoom-in" src = {TheHut1} alt = "TheHut mainpage"/>
                </div>
                <div className = "col-lg-6 d-flex justify-content-center align-items-center">
                    <div className = "projects-body">
                        TheHut is a social website where users can post text, links, images and videos.
                        These posts can then be commented on, liked and sorted by most liked, newest etc.
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-lg-6 d-flex justify-content-center align-items-center">
                    <div className = "projects-body">
                        TheHut is a fullstack application using
                        React on the frontend and Ruby On Rails on the backend.
                        AWS is used to store user submitted images online, and the app
                        is hosted on Heroku. View the app live here: test.website
                    </div>
                </div>
                <div className = "col-lg-6 d-flex justify-content-center">
                    <img className = "responsive-img zoom-in" src = {TheHut2} alt = "Showing an example post"/>
                </div>
            </div>
            <hr />
            <div className = "row">
                <div className = "col-lg-12">
                    <div className = "projects-title blabber-title">blabber</div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-lg-6 d-flex justify-content-center">
                    <img className = "responsive-img zoom-in" src = {blabber1} alt = "blabber homepage"/>
                </div>
                <div className = "col-lg-6 d-flex justify-content-center align-items-center">
                    <div className = "projects-body">
                        blabber is a social website, where users can send messages to others.
                        Users can join/create servers and within the servers join/create channels to begin
                        chatting with others.
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-lg-6 d-flex justify-content-center align-items-center">
                    <div className = "projects-body">
                        blabber is a fullstack application with
                        React on the frontend and Ruby On Rails on the backend.
                        AWS is used to store user submitted images online, and the app
                        is hosted on Heroku. GIPHY api is used to send GIFs.
                        View the app live here: test.website
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