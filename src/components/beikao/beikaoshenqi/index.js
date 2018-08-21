import React, { Component } from 'react';


import aboutList from '../../../static/data/about';

import Gitalk from '../../gitalk';

import ContentMain from '../../content';


export default class BeiKaoShenQi extends ContentMain {

    constructor(props) {
        super(props);
        console.log(props)
    }
   
    render() {

        return (
            <div className="article-wrap">
                <div className="article">
                    <div className="article-head">
                        <div className="left floated tools">
                            <a className="item icon">
                                <i className="icon align justify"></i>
                            </a>
                        </div>
                        <div className="right floated tools"></div>
                        <h1>在线资源</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    在线资源
                                </h4>
                            </blockquote>

                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                             
                            </h4>
                            <h4>
                                <ul>
                                    <li><a href="#/pdf/reader/1">PMBOK6.0中文版在线查看</a></li>
                                    <li><a href="#/pdf/reader/2">备考神器2018</a></li>
                                    <li><a href="#/pdf/reader/3">思维导图汇总</a></li>
                                </ul>
                            </h4>

   

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}