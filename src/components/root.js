import React from 'react';
import ScoreCounter from './score-counter';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>My app woo!</div>
                <ScoreCounter />
            </div>
        );
    }
}

