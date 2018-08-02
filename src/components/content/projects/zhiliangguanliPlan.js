import React, { Component } from 'react';

export default class ZhiLiangGuanLiPlan extends Component {

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
                        <h1>质量管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    质量管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                质量管理计划是项目管理计划的组成部分，描述如何实施适用的政策、程序和指南以实现质量目标。它描述了项目管理团队为实现一系列项目质量目标所需的活动和资源。质量管理计划可以是正式或非正式的，非常详细或高度概括的，其风格与详细程度取决于项目的具体需要。应该在项目早期就对质量管理计划进行评审，以确保决策是基于准确信息的。这样做的好处是，更加关注项目的价值定位，降低因返工而造成的成本超支金额和进度延误次数。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                质量管理计划包括（但不限于）以下组成部分：
                            </h4>
                            <h4>
                                <ul>
                                    <li>项目采用的质量标准</li>
                                    <li>项目的质量目标</li>
                                    <li>质量角色与职责</li>
                                    <li>需要质量审查的项目可交付成果和过程</li>
                                    <li>为项目规划的质量控制和质量管理活动</li>
                                    <li>项目使用的质量工具</li>
                                    <li>与项目有关的主要程序，例如处理不符合要求的情况、纠正措施程序，以及持续改进程序</li>
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