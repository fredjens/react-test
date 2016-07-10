
import React from 'react';

class Single extends React.Component {
    render() {
    const i = this.props.params.id;
    const article = this.props.articles[i];
        return (
              <div className="container">
                  <div className="jumbotron">
                    <h1>{article.title}</h1>
                  </div>
                  <p>{article.text}</p>
              </div>
        );
    }
}

export default Single;
