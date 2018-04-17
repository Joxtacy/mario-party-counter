import React from 'react';
import PropTypes from 'prop-types';

class ScoreCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={ this.props.onClick }>
                { this.props.buttonLabel }
            </button>
        );
    }
}

ScoreCounter.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string.isRequired
};

export default ScoreCounter;
