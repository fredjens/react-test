
import React from 'react';
import classNames from 'classnames';
import Counter from './counter';
import Box from './box';

const Number = props => {
        const buttonClass = classNames({
            'btn btn-primary btn-lg': true,
            'animated flip': props.number === 5,
        });

        return (
            <div className="jumbotron">
                <h1>
                    {props.number < 3 ? props.title : 'Keep´m coming!'}
                </h1>
                <p>{props.text}</p>
                <button className={buttonClass}>
                    {props.button}
                </button>
            </div>
        );
}

Number.propTypes = {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    button: React.PropTypes.string.isRequired
};

export default Number;
