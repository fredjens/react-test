
import React from 'react';

const Counter = props =>
    <div className="nav navbar-nav navbar-text navbar-right">
        <div className="label label-default">
            {props.number}
            {props.number === 1 ? ' article' : ' articles'}
        </div>
    </div>
;

Number.propTypes = { number: React.PropTypes.number.isRequired };

export default Counter;
