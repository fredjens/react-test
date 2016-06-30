
import React from 'react';

const Number = React.createClass({
    propTypes: {
        number: React.PropTypes.number.isRequired,
    },
    render() {
        return (
            <div className="nav navbar-nav navbar-text navbar-right">
                <div className="label label-default">{this.props.number} articles</div>
            </div>
        );
    },
});

export default Number;
