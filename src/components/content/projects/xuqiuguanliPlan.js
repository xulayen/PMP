import React, { Component } from 'react';
import ContentMain from '../index';
export default class XiuQiuGuanLiPlan extends ContentMain {

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
                        <h1>需求管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    需求管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                需求管理计划是项目管理计划的组成部分，描述将如何分析、记录和管理项目和产品需求。根据《从业者商业分析：实践指南》[7]，有些组织称之为“商业分析计划”。需求管理计划的主要内容包括（但不限于）：
                            </h4>
                            <h4>
                                <ol>
                                    <li>如何规划、跟踪和报告各种需求活动；</li>
                                    <li>配置管理活动，例如，如何启动变更，如何分析其影响，如何进行追溯、跟踪和报告，以及变更审批权限；</li>
                                    <li>需求优先级排序过程；</li>
                                    <li>测量指标及使用这些指标的理由；</li>
                                    <li>反映哪些需求属性将被列入跟踪矩阵的跟踪结构。</li>
                                </ol>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>

                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}