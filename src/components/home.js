
import React from 'react';
import Repeat from './repeat';
import Add from './add';
import data from '../data/data';
import Jumbotron from './jumbotron';

class Home extends React.Component {
    handleSubmit(item) {
        this.props.addArticle(item);
    }

    handleLike(item) {
        console.log(item);
        this.props.like(item);
    }

    handleRemove(item) {
        console.log(item);
        this.props.removeArticle(item);
    }

    render() {
        return (
            <div className="container">
                <Jumbotron
                    title={data.title}
                    text={data.text}
                    button={data.button}
                    number={this.props.articles.length}
                />
            <Add onSubmit={this.handleSubmit.bind(this)} number={this.props.articles.length} />
                <Repeat
                    articles={this.props.articles}
                    onLike={this.handleLike.bind(this)}
                    onRemove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}

export default Home;
