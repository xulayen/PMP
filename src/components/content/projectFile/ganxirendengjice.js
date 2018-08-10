import React, { Component } from 'react';import ContentMain from '../index';

export default class GanXiRenDengjiCe extends ContentMain {

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
                        <h1>干系人登记册</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    干系人登记册
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                相关方登记册是识别相关方过程的主要输出。它记录关于已识别相关方的信息，包括（但不限于）：
                            </h4>

                            <h4>
                                <ul>
                                    <li>身份信息。姓名、组织职位、地点、联系方式，以及在项目中扮演的角色。</li>
                                    <li>评估信息。主要需求、期望、影响项目成果的潜力，以及相关方最能影响或冲击的项目生命周期阶段。</li>
                                    <li>相关方分类。用内部或外部，作用、影响、权力或利益，上级、下级、外围或横向，或者项目经理选择的其他分类模型，进行分类的结果。</li>
                                </ul>
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