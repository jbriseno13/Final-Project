import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbarprivate.css";
const PrivateNavBar = ({ setHomeView }) => {
  const { logout } = useAuth0();

  return (
    <div className="navbar-private">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Favorites
      </NavLink>
      <NavLink
        to="/videos"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Videos
      </NavLink>
      <NavLink
        to="/resources"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Resources
      </NavLink>
      <NavLink
        to="/profile"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </NavLink>
    </div>
  );
};

export default PrivateNavBar;
