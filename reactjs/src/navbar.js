import React from 'react';
// import { Link } from "react-router-dom";
import './navbar.css';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
class Navbar extends React.Component {
    render() {
      return(
          <header>
            <a href="/#" className="logo">Greenage</a>
            <ul>
              <li><a href="/#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#video">Video</a></li>
              <li><a href="#effect">Gallery</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#solution">Solutions</a></li>
              <li><a href="#task">Tasks</a></li>
            </ul>
            {/* <ul>
              <li><Link to={"/#"} target="_top">Home</Link></li>
              <li><Link to={"/"} target="_top">Task</Link></li>

            </ul> */}
          </header>
      )
    }
}
export default Navbar;