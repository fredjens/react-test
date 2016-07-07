
import React from 'react';
import Navbar from './navbar.js';

const Main = props =>
    <div className="app">
        <Navbar />
        <div className="main-container">
            {props.children}
         </div>
    </div>
;

Main.propTypes = { children: React.PropTypes.object.isRequired };

export default Main;
