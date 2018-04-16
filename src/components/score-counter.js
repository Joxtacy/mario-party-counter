import React from 'react';
import ScoreChanger from './score-changer';

export default class ScoreCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ScoreChanger />
            </div>
        );
    }
}

