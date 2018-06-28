import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './HomepageLayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();