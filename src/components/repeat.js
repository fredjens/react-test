
import React from 'react';
import Box from './box';

class Repeat extends React.Component {
    handleLike(article) {
        this.props.onLike(article);
    }

    removeArticle(article) {
        this.props.onRemove(article);
    }

    render() {
            const list = this.props.articles.map((article, index) => {
            return (
              <div key={article.id} className="animated slideInDown">
                <h2>{article.title}</h2>
                <p>{article.text} ({article.id})</p>
                <button className="btn btn-success" onClick={this.handleLike.bind(this, index)}>👍
                    <Box number={article.likes} />
                </button>
                <button className="btn btn-warning" onClick={this.removeArticle.bind(this, index)}>❌</button>
              </div>
            );
        });
        return (
          <div>
            {list}
          </div>
        );
    }
}

Repeat.propTypes = { articles: React.PropTypes.array.isRequired };

export default Repeat;
