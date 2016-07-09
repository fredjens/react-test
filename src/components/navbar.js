
import React from 'react';
import { Link } from 'react-router';
import Counter from './counter';

const Navbar = (props) =>
    <header className="navbar">
        <div className="container-fluid">
            <ul className="nav navbar-left navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <div className="nav navbar-right">
                <Counter number={props.number} />
            </div>
        </div>
    </header>
;

export default Navbar;
