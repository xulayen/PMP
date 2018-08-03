This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run start-client](#start-client)
  - [npm run start-pro](#start-pro)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- 默认使用HashRouter进行展示，如果需要使用BrowserRouter,请自行修改`route/index.js`文件

``` js

import {
    //BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'

```

[在线查看](http://pmp.xulayen.com/index.html#/pre/face)