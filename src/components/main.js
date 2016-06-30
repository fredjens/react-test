
import React from 'react';
import { Link } from 'react-router';

import Counter from './counter';

import data from '../data/data';

const Main = React.createClass({
    propTypes: {
        children: React.PropTypes.object.isRequired,
    },
    getInitialState() {
        return {
            number: data.length,
        };
    },
    render() {
        return (
            <div className="app">
                <header className="navbar">
                    <div className="container-fluid">
                        <ul className="nav navbar-left navbar-nav">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About</Link></li>
                        </ul>
                        <Counter number={this.state.number} />
                    </div>
                </header>
                <main className="main-container">
                    {this.props.children}
                 </main>
            </div>
        );
    },
});

export default Main;
