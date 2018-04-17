import React from 'react';
import PropTypes from 'prop-types';

class PlayerHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={ this.props.src } />
            </div>
        )
    }
}

PlayerHeader.propTypes = {
    src: PropTypes.string.isRequired
};

export default PlayerHeader;