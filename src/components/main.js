
import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    propTypes: {
        children: React.PropTypes.object.isRequired,
    },
    render() {
        return (
            <div className="app">
                <header className="navbar">
                    <ul className="nav navbar-nav">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                    </ul>
                </header>
                <main className="main-container">
                    {this.props.children}
                 </main>
            </div>
        );
    },
});

export default Main;
