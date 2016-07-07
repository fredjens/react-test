
import React from 'react';

const Box = props =>
    <div className="label label-default">
        {props.name}
    </div>
;

Box.propTypes = { name: React.PropTypes.string.isRequired };

export default Box;
