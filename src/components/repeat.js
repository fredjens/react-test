
import React from 'react';

class Repeat extends React.Component {
    render() {
        const list = this.props.data.map(item => {
            return (
              <div key={item.id} className="animated slideInDown">
                <h2>{item.title}</h2>
                <p>{item.text} ({item.id})</p>
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

Repeat.propTypes = { data: React.PropTypes.array.isRequired };

export default Repeat;
