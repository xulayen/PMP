import React from 'react';
import ReactDOM from 'react-dom';
import Main from './route';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';

//ReactDOM.render(<Main />, document.getElementById('root'));
render(<Main />, document.getElementById('root'));
registerServiceWorker();
