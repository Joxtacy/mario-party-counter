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
        this.reduceByOne = this.reduceByOne.bind(this);
    }

    increaseByOne() {
        const oldScore = this.state.score;
        this.setState({
            score: oldScore + 1
        });
    }

    reduceByOne() {
        const oldScore = this.state.score;
        this.setState({
            score: oldScore - 1
        });
    }

    render() {
        return (
            <div>
                <ScoreCounter onClick={ this.reduceByOne } buttonLabel='-'/>
                <LabelComponent label={ this.state.score } />
                <ScoreCounter onClick={ this.increaseByOne } buttonLabel='+'/>
            </div>
        );
    }
}

export default CounterComponent;
