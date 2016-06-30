
import React from 'react';
import { Link } from 'react-router';

import Counter from './counter';

import data from '../data/data';

function decending(a, b) {
    return parseFloat(b.id) - parseFloat(a.id);
}

data.sort(decending);

const Main = React.createClass({
    propTypes: {
        children: React.PropTypes.object.isRequired,
    },
    getInitialState() {
        return {
            data,
            number: data.length,
        };
    },
    handleCommentSubmit(item) {
        data.push(item);
        data.sort(decending);
        this.setState({ data });
        this.setState({ number: data.length });
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
                <main className="main-container" data={this.state.data} onSubmit={this.handleCommentSubmit}>
                    {this.props.children}
                 </main>
            </div>
        );
    },
});

export default Main;
