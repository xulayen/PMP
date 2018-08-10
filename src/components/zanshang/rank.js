import React, { Component } from 'react';

import '../../static/css/time-axis.css'
import dimeAxis from '../../static/data/rank/index.json';
import $ from 'jquery';
import Gitalk from '../gitalk';


import ContentMain from '../content';

export default class RankList extends ContentMain {

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
                        <h1>赞赏榜</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    赞赏记录
                                </h4>
                            </blockquote>
                            <div className="time-axis">

                                {
                                    dimeAxis.sort((c,d)=>{
                                        return c.date<d.date;
                                    }).map(d => {

                                        return <li className="time-axis-item">
                                            <div className="time-axis-date">
                                                {d.date}
                                                <span></span>
                                            </div>
                                            {
                                                d.list.map(l => {
                                                    return <div>
                                                        <div className="time-axis-title">{l.title}</div>
                                                        <p className="time-axis-achievement">{l.achievement}</p>
                                                    </div>
                                                })
                                            }

                                        </li>


                                    })
                                }

                            </div>
                            <br />

                        </div>
                    </div>
                </div>
                <Gitalk />
            </div>
        );
    }


}