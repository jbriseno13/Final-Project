import "./App.css";
import NavBar from "./components/navbar";
import Profile from "./components/profile";
import VideosPage from "./components/navBarPrivate/videospage";
import Resources from "./components/resourcepage";
import Loading from "./components/loading";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes, Link } from "react-router-dom";
import AuthenticationButton from "./components/authentication-button";
import LandingPage from "./components/landingpage";
import PrivateNavBar from "./components/navBarPrivate/navbarprivate";
import Favorite from "./components/favorites";

// import { Routes } from 'react-router-dom';

function App() {
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  console.log("user", user);

  return (
    <div className="landing-page-section">
      {user ? (
        <div>
          <PrivateNavBar />
          <Routes>
           <Route path="/" element={<LandingPage/>}/>
            <Route path="/videos" element={<VideosPage/>}/>
            <Route path="/favorites" element={<Favorite/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
          {/* <VideosPage/> */}
          <div>
            {/* <Routes>
              <Route path="/api/me" element={<Profile user={user} />} />
              <Route
                path="/api/resources"
                element={<Resources user={user} />}
              />
            </Routes> */}
          </div>
        </div>
      ) : (
        <>
          <section className="mapping-section">
            <header>
              <div className="navbar">
                <div className="navbar__container">
                  <a href="home" id="navbar__logo"></a>
                  <div className="navbar__toggle" id="mobile-menu">
                    <span className="bar"></span> <span className="bar"></span>
                    <span className="bar"></span>
                  </div>
                  <ul className="navbar__menu">
                    <li className="navbar__item">
                      <a href="#home" className="navbar__links" id="home-page">
                        Home
                      </a>
                    </li>
                    <li className="navbar__item">
                      <a
                        href="#about"
                        className="navbar__links"
                        id="about-page"
                      >
                        About
                      </a>
                    </li>
                    <li className="navbar__item">
                      <a
                        href="#contactus"
                        className="navbar__links"
                        id="home-page"
                      >
                        Contact Us
                      </a>
                    </li>

                    <li className="navbar__btn">
                      {/* <a href="#sign-in" className="button" id="signin"> */}
                      {<AuthenticationButton />}
                      {/* </a> */}
                    </li>
                  </ul>
                </div>
              </div>
            </header>

            {/* <!-- Hero Section for CSS--> */}
            <div className="hero" id="home">
              <div className="hero__container">
                <h1 className="hero__heading">TERA</h1>
                <p className="hero__description">
                  Learn about mental health and track your daily emotions.
                  
                </p>
                <button className="main__btn">
                  <a href="#">Explore</a>
                </button>
              </div>
            </div>

            {/* <!-- About Section --> */}
            <div className="main" id="about">
              <div className="main__container">
                <div className="main__img--container">
                  <div className="main__img--card">
                    <i className="fas fa-layer-group">
                      <div className="iframe">
                        <iframe
                          className="introvideo"
                          src={`https://www.youtube.com/embed/9Pp-GhbpGcg`}
                          frameborder="0"
                          height="350px"
                          width="450px"
                          allow="autoplay; encrypted-media"
                          allowfullscreen
                          title="video"
                        />
                      </div>
                    </i>
                  </div>
                </div>
                <div className="main__content">
                  <h1>Welcome to TERA!</h1>
                  <h2>Watch videos and learn more about mental health.</h2>
                  <p>
                    {" "}
                    TERA is an application meant to help improve your <br></br>{" "}
                    relationship with yourself and those around you. Break the{" "}
                    <br></br>toxic cycles in your behavior. .
                  </p>
                  <button className="main__btn">
                    <a href="#">Read More</a>
                  </button>
                </div>
              </div>
            </div>

            <container className="top-image-cover"></container>

            {/* <!-- Contact Section --> */}
            <div className="main" id="contactus">
              <div className="main__container">
                <div className="main__img--container">
                  <div className="main__img--card">
                    <i className="fas fa-layer-group"></i>
                  </div>
                </div>
                <div className="main__content">
                  <h1>Contact Us!</h1>
                  <h2>Contact Information!</h2>
                </div>
              </div>
            </div>
          </section>

          <div id="app" className="d-flex flex-column h-100">
            <header className="App-header">
              <NavBar />
              <div className="container flex-grow-1">
                {/* {!user ? (
                  <span>Hello from Tera.</span>
                ) : (
                  <span>
                    Hi <Link to="api/me">{user.name}</Link>
                  </span>
                )} */}
              </div>
            </header>
            <footer className="home-landing"></footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
