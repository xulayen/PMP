import React, { Component } from 'react';import ContentMain from '../index';

export default class TuanDuiZhangCheng extends ContentMain {

    constructor(props) {
        super(props);
        console.log(props)
    }


    componentWillMount() {
        // 第一次加载时
        // "constructor"
        // "componentWillMount"
        // "render"
        // "componentDidMount"

    }

    componentWillUpdate() {
        // 当组件的props发生改变时，组件更新，会调用如下的生命周期钩子
        // "componentWillReceiveProps"
        // "shouldComponentUpdate"
        // "componentWillUpdate"
        // "render"
        // "componentDidUpdate"

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
                        <h1>团队章程</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    团队章程
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                团队章程是为团队创建团队价值观、共识和工作指南的文件。团队章程可能包括（但不限于）：
                            </h4>
                            <h4>
                                <ul>

                                    <li>团队价值观</li>
                                    <li>沟通指南</li>
                                    <li>决策标准和过程</li>
                                    <li>冲突处理过程</li>
                                    <li>会议指南</li>
                                    <li>团队共识</li>
                                </ul>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                团队章程对项目团队成员的可接受行为确定了明确的期望。尽早认可并遵守明确的规则，有助于减少误解，提高生产力；讨论诸如行为规范、沟通、决策、会议礼仪等领域，团队成员可以了解彼此重要的价值观。由团队制定或参与制定的团队章程可发挥最佳效果。所有项目团队成员都分担责任，确保遵守团队章程中规定的规则。可定期审查和更新团队章程，确保团队始终了解团队基本规则，并指导新成员融入团队。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}