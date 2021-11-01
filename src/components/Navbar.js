import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarMore from './NavbarMore';




const expand = () => {
  const navbar = document.querySelector(".navbar")
  navbar.classList.toggle("navbar_invert")

}

const Navbar = () => {

  return(
    <div className="navbar">
      <div className="navbar_center">
        <img src={"https://static.files.bbci.co.uk/orbit/0b0a71ff229422fc63da1ec4b9726123/img/blq-orbit-blocks_white_alpha.png"} />
        <ul className="navbar_menu">
        <Router>
            <li><Link to="#">Sign in</Link></li>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">News</Link></li>
            <li><Link to="#">Sport</Link></li>
            <li><Link to="#">Reel</Link></li>
            <li><Link to="#">Worklife</Link></li>
            <li><Link to="#">Travel</Link></li>
            <li><Link to="#">Future</Link></li>
            <li><Link to="#">Culture</Link></li>
            {/* Dumme for Dropdown */}
            <li><Link to="#" onClick={expand}>More</Link></li>
          </Router>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
