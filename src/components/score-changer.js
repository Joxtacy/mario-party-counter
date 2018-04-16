import React from 'react';

export default class ScoreChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            score: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>{ this.state.score }</h2>
                <input onChange={ this.handleChange } value={ this.state.score } />
            </div>
        );
    }
}

