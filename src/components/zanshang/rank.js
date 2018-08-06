import React, { Component } from 'react';

import '../../static/css/time-axis.css'
import dimeAxis from '../../static/data/rank/index.json';
import $ from 'jquery';
import Gitalk from '../gitalk';

export default class RankList extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount() {


        // $.each(dimeAxis, function (i, e) {
        //     var html = '<li class="time-axis-item">' +
        //         '<div class="time-axis-date">' + e.date + '<span></span></div>' +
        //         '<div class="time-axis-title">' + e.list.title + '</div>' +
        //         '<p class="time-axis-achievement">' + e.list.achievement + '</p>' +
        //         '</li>';
        //     console.log(e)
        //     $('.time-axis').append(html);
        // });

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