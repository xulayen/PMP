import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

import React, { Component } from 'react';

import config from '../../config';

import ZanShang from '../zanshang';

export default class GitalkContainer extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        var gitalk = new Gitalk(config.gitalk)
        gitalk.render('gitalk-container');


    }

    render() {
        return (
            <div className="article-comment">

                <ZanShang />

                <div id="gitalk-container">

                </div>
                <br />
                <br />
            </div>
        );
    }


}