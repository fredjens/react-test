
import React from 'react';

const Repeat = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
    },
    render() {
        const list = this.props.data.map(item => {
            return (
              <div key={item.id}>
                <h2>{item.author}</h2>
                <p>{item.text}</p>
                {item.id}
              </div>
            );
        });
        return (
          <div>
            {list}
          </div>
        );
    },
});

export default Repeat;
