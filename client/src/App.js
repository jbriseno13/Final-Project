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
                  <h2>Mental Health can be challenging, learning about it shouldn't be.</h2>
                  <p>
                    {" "}
                    TERA is an application meant to help you learn  <br></br>{" "}
                    about various mental health topics and log your daily emotions{" "}
                    <br></br>
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
             
                <div className="main__img--container">
                  <div className="main__img--card">
                    <fieldset className="contact-form-area">
                      <form className="contact-form">
                      <h1>Contact Us!</h1>
                 
                        <label>Name</label>
                        <input className="form-name" type="text"></input>
                        <br></br>
                        <label>Email</label>
                        <input className="form-email" type="email"></input>
                        <br></br>
                        <label>Message</label>
                        <textarea className="form-message"></textarea>
                        <br></br>
                        <button className="form-submit">Submit</button>
                      </form>
                    </fieldset>
                    <i className="fas fa-layer-group"></i>
                  </div>
                </div>
                <div className="main__content">
                  {/* <h1>Contact Us!</h1>
                  <h2>Contact Information!</h2> */}
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
            <footer className="home-landing">
            <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
       
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
              
            </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
