
import React from 'react';

import Box from './box';
import Repeat from './repeat';
import Add from './add';
import data from '../data/data';
import Counter from './counter';

function decending(a, b) {
    return parseFloat(b.id) - parseFloat(a.id);
}

data.sort(decending);

const Home = React.createClass({
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
            <div className="container">
                <div className="jumbotron">
                    <Counter number={this.state.number} />
                    <h1>Hello, World</h1>
                    <p>asdfasdf fd asd f asd f asd f afds</p>
                    <button className="btn btn-primary btn-lg">Call to action</button>
                    <div>
                        <Box name="hei" />
                        <Box name="asdasd" />
                        <Box name="asdfasd" />
                    </div>
                </div>
                <Add onSubmit={this.handleCommentSubmit} id={this.state.number} />
                <Repeat data={this.state.data} />
            </div>
        );
    },
});

export default Home;
