
import React from 'react';
import { Link } from 'react-router';
import Box from './box';

class Repeat extends React.Component {
    handleLike(article) {
        this.props.onLike(article);
    }

    removeArticle(article) {
        this.props.onRemove(article);
    }

    render() {
        const articles = this.props.articles.sort((a, b) => b.id - a.id);
        const list = articles.map((article, index) => {
        return (
          <Link to={`article/${article.id}`} key={article.id} className="animated slideInDown">
            <h2>{article.title}</h2>
            <p>{article.text} ({article.id})</p>
            <button className="btn btn-success" onClick={this.handleLike.bind(this, index)}>👍
                <Box number={article.likes} />
            </button>
            <button className="btn btn-warning" onClick={this.removeArticle.bind(this, index)}>❌</button>
          </Link>
        );
        });
        return (
          <div>
            {list}
          </div>
        );
    }
}

Repeat.propTypes = {
    articles: React.PropTypes.array.isRequired,
    onLike: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
};

export default Repeat;
