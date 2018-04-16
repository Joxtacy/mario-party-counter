import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

const title = 'Mario Party Counter';

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);

module.hot.accept();

