
import React from 'react';

import Box from './box';
import Repeat from './repeat';
import Add from './add';
import Counter from './counter';



const Home = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <Counter number={this.props.number} />
                    <h1>Hello, World</h1>
                    <p>asdfasdf fd asd f asd f asd f afds</p>
                    <button className="btn btn-primary btn-lg">Call to action</button>
                    <div>
                        <Box name="hei" />
                        <Box name="asdasd" />
                        <Box name="asdfasd" />
                    </div>
                </div>
                <Repeat data={this.props.data} />
            </div>
        );
    },
});

export default Home;
