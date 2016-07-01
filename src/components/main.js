
import React from 'react';
import { Link } from 'react-router';
import Counter from './counter.js';


export default class Main extends React.Component {
    constructor () {
        super()
        this.state = {
            data: [],
            number: null
        }
    }
    handlenumber (n) {
        this.setState({
            number: n,
        })
    }

    render() {
        return (
            <div className="app">
                <header className="navbar">
                    <Counter number={this.state.number} />
                    <div className="container-fluid">
                        <ul className="nav navbar-left navbar-nav">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </header>
                <main className="main-container">
                    {React.cloneElement(this.props.children, { handlenumber: this.handlenumber.bind(this)})}
                 </main>
            </div>
        );
    }
}
