// import React form 'react';
import PrivateNavBar from "./navBarPrivate/navbarprivate";

import "./landingpage.css";
import { useEffect, useState } from "react";
//import Profile from "./profile"

const LandingPage = () => {
  const [landingpagecontent, setLandingpagecontent] = useState([]);

  const getLandingpagecontent = async () => {
    try {
      const response = await fetch("/api/landing");
      const landingpagecontent = await response.json();
      setLandingpagecontent(landingpagecontent);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLandingpagecontent();
  }, []);

  return (
    <div className="landing-page-welcome">
      <div className="hero-landing">
        <h1 className="landing-h1">
          TERA <br></br> (te·rə)<br></br>Your mental health
        </h1>
      </div>
      <h2 className="landing-h2">How does it Work?</h2>
      <ul className="landing-cards-area">
        {landingpagecontent.map((landing, index) => {
          return (
            <div className="landing-cards">
              <li key={index} className="landing-index">
                <img className="landing-image" src={landing.image}></img>
                <div className="landing-name">{landing.description} </div>
                <div className="landing-note">{landing.details}</div>
              </li>
            </div>
          );
        })}
      </ul>
      <footer className="footer-landing"></footer>
    </div>
  );
};

export default LandingPage;
