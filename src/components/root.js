import React from 'react';
import CounterComponent from './counter-component';
import CoinCounter from './coin-counter';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CounterComponent />
                <CoinCounter />
            </div>
        );
    }
}

