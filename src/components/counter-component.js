import React from 'react';
import LabelComponent from './label-component';
import ScoreCounter from './score-counter';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
        this.increaseByOne = this.increaseByOne.bind(this);
        this.decreaseByOne = this.decreaseByOne.bind(this);
    }

    increaseByOne() {
        const oldScore = this.state.score;
        this.setState({
            score: oldScore + 1
        });
    }

    decreaseByOne() {
        const oldScore = this.state.score;
        const newScore = oldScore - 1 > 0 ? oldScore - 1 : 0;
        this.setState({
            score: newScore
        });
    }

    render() {
        return (
            <div>
                <ScoreCounter onClick={ this.decreaseByOne } buttonLabel='-'/>
                <LabelComponent label={ this.state.score } />
                <ScoreCounter onClick={ this.increaseByOne } buttonLabel='+'/>
            </div>
        );
    }
}

export default CounterComponent;
