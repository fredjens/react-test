
import React from 'react';

const Box = props =>
    <div className="label label-default">
        {props.number}
    </div>
;

Box.propTypes = { number: React.PropTypes.number.isRequired };

export default Box;
