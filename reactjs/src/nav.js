import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
class Nav extends React.Component {
    render() {
      return(
          <header>
            <a href="#" className="logo">Greenage</a>
            <ul>
              <li><Link to="/#" target="_top">Home</Link></li>
              <li><Link to="/task" target="_top">Task</Link></li>
            </ul>
          </header>
      )
    }
}
export default Nav;