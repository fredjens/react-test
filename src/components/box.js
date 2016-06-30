
import React from 'react';

const Box = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },
    render() {
        return (
            <div className="label label-default">
                {this.props.name}
            </div>
        );
    },
});

export default Box;
