
import React from 'react';
import { Link } from 'react-router';

const Navbar = (props) =>
    <header className="navbar">
        <div className="container-fluid">
            <ul className="nav navbar-left navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </header>
;

export default Navbar;
