import React, { Component } from 'react';
import ContentMain from '../index';
export default class FanWeiGuanLiPlan extends ContentMain {

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
                        <h1>范围管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    范围管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                范围管理计划是项目管理计划的组成部分，描述将如何定义、制定、监督、控制和确认项目范围。范围管理计划要对将用于下列工作的管理过程做出规定：
                            </h4>
                            <h4>
                                <ul>
                                    <li>制定项目范围说明书</li>
                                    <li>根据详细项目范围说明书创建 WBS</li>
                                    <li>确定如何审批和维护范围基准</li>
                                    <li>正式验收已完成的项目可交付成果</li>
                                </ul>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                根据项目需要，范围管理计划可以是正式或非正式的，非常详细或高度概括的。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}