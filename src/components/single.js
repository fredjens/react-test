
import React from 'react';

import Box from './box';

class Single extends React.Component {
    handleLike(article) {
        this.props.like(article);
        console.log(article);
    }

    render() {
    const i = parseInt(this.props.params.id);
    const article = this.props.articles[i];
        return (
              <div className="container">
                  <div className="jumbotron">
                    <h1>{article.title}</h1>
                  </div>
                  <button className="btn btn-success" onClick={this.handleLike.bind(this, i)}>👍
                      <Box number={article.likes} />
                  </button>
                  <p>{article.text}</p>
              </div>
        );
    }
}

export default Single;
