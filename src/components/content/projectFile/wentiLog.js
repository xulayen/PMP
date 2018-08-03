import React, { Component } from 'react';

//问题日志
export default class WenTiLog extends Component {

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
                        <h1>问题日志</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    问题日志
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                在整个项目生命周期中，项目经理通常会遇到问题、差距、不一致或意外冲突。项目经理需要采取某些行动加以处理，以免影响项目绩效。问题日志是一种记录和跟进所有问题的项目文件，所需记录和跟进的内容可能包括：
                            </h4>
                            <h4>
                                <ol>
                                    <li>问题类型</li>
                                    <li>问题提出者和提出时间</li>
                                    <li>问题描述</li>
                                    <li>问题优先级</li>
                                    <li>由谁负责解决问题</li>
                                    <li>目标解决日期</li>
                                    <li>问题状态</li>
                                    <li>最终解决情况</li>
                                </ol>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                问题日志可以帮助项目经理有效跟进和管理问题，确保它们得到调查和解决。作为本过程的输出，问题日志被首次创建，尽管在项目期间任何时候都可能发生问题。在整个项目生命周期应该随同监控活动更新问题日志。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}