import React from 'react';
import PropTypes from 'prop-types';
import LabelComponent from './label-component';
import ScoreCounter from './score-counter';

class CoinCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coins: 0
        };

        this.increaseByOne = this.increaseByOne.bind(this);
        this.decreaseByOne = this.decreaseByOne.bind(this);
        this.increaseByTen = this.increaseByTen.bind(this);
        this.decreaseByTen = this.decreaseByTen.bind(this);
    }

    increaseByOne() {
        const oldCoins = this.state.coins;
        this.setState({
            coins: oldCoins + 1
        });
    }

    decreaseByOne() {
        const oldCoins = this.state.coins;
        const newScore = oldCoins - 1 > 0 ? oldCoins - 1 : 0;
        this.setState({
            coins: newScore
        });
    }

    increaseByTen() {
        const oldCoins = this.state.coins;
        this.setState({
            coins: oldCoins + 10
        });
    }

    decreaseByTen() {
        const oldCoins = this.state.coins;
        const newCoins = oldCoins - 10 > 0 ? oldCoins - 10 : 0;
        this.setState({
            coins: newCoins
        });
    }

    render() {
        return (
            <div>
                <ScoreCounter onClick={ this.decreaseByTen } buttonLabel='-10' />
                <ScoreCounter onClick={ this.decreaseByOne } buttonLabel='-1' />
                <LabelComponent label={ this.state.coins } />
                <ScoreCounter onClick={ this.increaseByOne } buttonLabel='+1' />
                <ScoreCounter onClick={ this.increaseByTen } buttonLabel='+10' />
            </div>
        )
    }
}

export default CoinCounter;