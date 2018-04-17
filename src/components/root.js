import React from 'react';
import CounterComponent from './counter-component';

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CounterComponent />
            </div>
        );
    }
}

