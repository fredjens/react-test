
import React from 'react';

import Repeat from './repeat';
import Add from './add';
import data from '../data/data';
import Jumbotron from './jumbotron';

function decending(a, b) {
    return parseFloat(b.id) - parseFloat(a.id);
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.articles,
            number: data.articles.length,
        };
    }

    handleCommentSubmit(item) {
        data.articles.push(item);
        data.articles.sort(decending);
        this.setState({
            data: data.articles,
            number: data.articles.length,
        });
    }

    render() {
        return (
            <div className="container">
                <Jumbotron
                    title={data.title}
                    text={data.text}
                    button={data.button}
                    number={this.state.number}
                />
                <Add onSubmit={this.handleCommentSubmit.bind(this)} id={this.state.number} />
                <Repeat data={this.state.data} />
            </div>
        );
    }
}

export default Home;
