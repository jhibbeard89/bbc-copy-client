import React from 'react';

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="navbar_center">
        <img src={"https://static.files.bbci.co.uk/orbit/0b0a71ff229422fc63da1ec4b9726123/img/blq-orbit-blocks_white_alpha.png"} />
        <ul className="navbar_menu">
          <li>Sign in</li>
          <li>Home</li>
          <li>News</li>
          <li>Sport</li>
          <li>Reel</li>
          <li>Worklife</li>
          <li>Travel</li>
          <li>Future</li>
          <li>Culture</li>
          {/* Dumme for Dropdown */}
          <li>More</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
