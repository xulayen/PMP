import React from 'react';
import ReactDOM from 'react-dom';
import Main from './route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
