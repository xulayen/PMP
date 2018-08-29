import React from 'react';
import ReactDOM from 'react-dom';
import AdminIndex from './admin/index';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';//服务端渲染

//ReactDOM.render(<AdminIndex />, document.getElementById('root'));
render(<AdminIndex />, document.getElementById('root'));
registerServiceWorker();
