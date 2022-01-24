import React from 'react';
import '../styles/Home.css';
import TheHut1 from '../assets/TheHut1.PNG';
import blabber1 from '../assets/blabber1.PNG';
import thoughts1 from '../assets/thoughts1.PNG';
import GithubLogo from '../assets/Github-logo.png';
import { NavHashLink } from 'react-router-hash-link';

const Home = () => {
  return (
    <div className="homepage-container container">
      <div className="row d-flex justify-content-center home-title-info">
        <div className="col-md-8 d-flex justify-content-center">
          <div className="home-title">Hey there, I'm James</div>
        </div>
        <div className="col-md-8 d-flex justify-content-center">
          <div className="home-info">
            I'm a full stack developer currently based in the greater Vancouver
            area. I am passionate about working on development projects, and
            learning new technologies.
          </div>
        </div>
      </div>
      <hr />
      <div className="row home-projects-info">
        <div className="col-md-12">
          <div className="home-title">Projects</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="home-project-title home-hut">TheHut</div>
          <div className="project-image">
            <a href="https://the-hut.herokuapp.com/" target="_blank">
              <img
                className="zoom-in"
                src={TheHut1}
                width="470"
                alt="TheHut mainpage"
              />
            </a>
          </div>
          <div className="home-body">
            TheHut is a social website where users can post text, images and
            videos. Posts can be liked, commented on, and sorted by popularity.
          </div>
          <div className="nav-link-project">
            <NavHashLink to={'/projects#TheHut'}>
              <button className="btn btn-warning the-hut-details-btn">
                View More Details
              </button>
            </NavHashLink>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="home-project-title home-blabber">blabber</div>
          <div className="project-image">
            <a href="https://blab-ber.herokuapp.com/" target="_blank">
              <img
                className="zoom-in"
                src={blabber1}
                width="470"
                alt="blabber homepage"
              />
            </a>
          </div>
          <div className="home-body">
            blabber is a community messaging app, where users can send messages
            to others, in various communities. Send images, videos, GIFs and
            emojis.
          </div>
          <div className="nav-link-project">
            <NavHashLink to={'/projects#blabber'}>
              <button className="btn btn-danger blabber-details-btn">
                View More Details
              </button>
            </NavHashLink>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="home-project-title home-thoughts">thoughts</div>
          <div className="project-image">
            <a href="https://the-thoughts-app.herokuapp.com/" target="_blank">
              <img
                className="zoom-in"
                src={thoughts1}
                width="470"
                alt="thoughts mainpage"
              />
            </a>
          </div>
          <div className="home-body">
            thoughts is a social website to create or search for topics and
            share your thoughts about them.
          </div>
          <div className="nav-link-project">
            <NavHashLink to={'/projects#thoughts'}>
              <button className="btn btn-warning the-thoughts-details-btn">
                View More Details
              </button>
            </NavHashLink>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="container d-flex justify-content-center align-items-center h-50">
            <div className="nav-link-project">
              <NavHashLink to={'/projects#TheHut'}>
                <button className="btn btn-success big-button">
                  View All Projects
                </button>
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>

      <hr className="margin-top" />
      <div className="row home-technologies-info">
        <div className="col-md-12">
          <div className="home-title">Technologies</div>
        </div>
      </div>
      <div className="row home-technologies-items">
        <div className="col-md-12">
          <div className="home-tech-item">JavaScript</div>
          <div className="home-tech-item">React</div>
          <div className="home-tech-item">Redux</div>
          <div className="home-tech-item">Ruby</div>
          <div className="home-tech-item">Ruby On Rails</div>
          <div className="home-tech-item">Node</div>
          <div className="home-tech-item">Express</div>
          <div className="home-tech-item">PostgreSQL</div>
          <div className="home-tech-item">Sequelize</div>
          <div className="home-tech-item">HTML</div>
          <div className="home-tech-item">CSS</div>
          <div className="home-tech-item">Sass</div>
          <div className="home-tech-item">SQL</div>
          <div className="home-tech-item">Bootstrap</div>
          <div className="home-tech-item">Material-UI</div>
          <div className="home-tech-item">Webpack</div>
          <div className="home-tech-item">Heroku</div>
          <div className="home-tech-item">npm</div>
          <div className="home-tech-item">Git</div>
          <div className="home-tech-item">API</div>
          <div className="home-tech-item">AWS</div>
          <div className="home-tech-item">Jest</div>
          <div className="home-tech-item">React Testing Library</div>
          <div className="home-tech-item">RSpec</div>
        </div>
      </div>
      <hr />
      <div className="row home-contact-info">
        <div className="col-md-6">
          <div className="home-title">Contact</div>
          <div className="home-info">
            Send me an email at{' '}
            <a
              className="contact-email"
              href="mailto: jegrieve7@gmail.com"
              target="_blank"
            >
              jegrieve7@gmail.com
            </a>
          </div>
        </div>
        <div className="col-md-6 home-github d-flex align-items-center">
          <a href="https://github.com/jegrieve" target="_blank">
            <img
              className="github-logo"
              src={GithubLogo}
              width="50"
              alt="Github logo link"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
