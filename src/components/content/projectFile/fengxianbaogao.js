import React, { Component } from 'react';

export default class FengXianBaoGao extends Component {

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
                        <h1>风险报告</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    风险报告
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                风险报告提供关于整体项目风险的信息，以及关于已识别的单个项目风险的概述信息。在项目风险管理过程中，风险报告的编制是一项渐进式的工作。随着实施定性风险分析、实施定量风险分析、规划风险应对、实施风险应对和监督风险过程的完成，这些过程的结果也需要记录在风险登记册中。在完成识别风险过程时，风险报告的内容可能包括（但不限于）：
                            </h4>
                            <h4>
                                <ul>
                                    <li>整体项目风险的来源。说明哪些是整体项目风险敞口的最重要驱动因素</li>
                                    <li>关于已识别单个项目风险的概述信息。例如，已识别的威胁与机会的数量、风险在风险类别中的分布情况、测量指标和发展趋势</li>
                                </ul>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                根据风险管理计划中规定的报告要求，风险报告中可能还包含其他信息。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}