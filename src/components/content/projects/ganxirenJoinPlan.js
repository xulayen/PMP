import React, { Component } from 'react';
import ContentMain from '../index';
export default class GanXiRenCanYuPlan extends ContentMain {

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
                        <h1>干系人参与计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    干系人参与计划
                                </h4>
                            </blockquote>
                            <h4>
                                <ol>
                                    <li>相关方参与计划是项目管理计划的组成部分。它确定用于促进相关方有效参与决策和执行的策略和行动。基于项目的需要和相关方的期望，相关方参与计划可以是正式或非正式的，非常详细或高度概括的。</li>
                                    <li>相关方参与计划可包括（但不限于）调动个人或相关方参与的特定策略或方法。</li>
                                </ol>
                            </h4>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}