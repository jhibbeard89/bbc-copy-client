import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavbarMore = () => {
  return(

    <div className="navbarmore">

      <ul className="navbar_menu">
        <Router>
          <li><Link to="#">More</Link></li>
          <li><Link to="#">Music</Link></li>
          <li><Link to="#">TV</Link></li>
          <li><Link to="#">Weather</Link></li>
          <li><Link to="#">Sounds</Link></li>
        </Router>
      </ul>
    </div>
  )
}

export default NavbarMore;
