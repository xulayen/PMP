import React, { Component } from 'react';

export default class JinDuGuanLiPlan extends Component {

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
                        <h1>进度管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    进度管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                进度管理计划是项目管理计划的组成部分，为编制、监督和控制项目进度建立准则和明确活动。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                            根据项目需要，进度管理计划可以是正式或非正式的，非常详细或高度概括的，其中应包括合适的控制临界值。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                进度管理计划会规定：
                            </h4>

                            <h4>
                                <ul>
                                    <li>项目进度模型制定。需要规定用于制定项目进度模型的进度规划方法论和工具。</li>
                                    <li>进度计划的发布和迭代长度。使用适应型生命周期时，应指定固定时间的发布时段、阶段和迭代。固定时间段指项目团队稳定地朝着目标前进的持续时间，它可以推动团队先处理基本功能，然后在时间允许的情况下再处理其他功能，从而尽可能减少范围蔓延。</li>
                                    <li>准确度。准确度定义了需要规定活动持续时间估算的可接受区间，以及允许的应急储备数量。</li>
                                    <li>计量单位。需要规定每种资源的计量单位，例如，用于测量时间的人时数、人天数或周数，用于计量数量的米、升、吨、千米或立方码。</li>
                                    <li>组织程序链接。工作分解结构（WBS）为进度管理计划提供了框架，保证了与估算及相应进度计划的协调性。</li>
                                    <li>项目进度模型维护。需要规定在项目执行期间，将如何在进度模型中更新项目状态，记录项目进展。</li>
                                    <li>控制临界值。可能需要规定偏差临界值，用于监督进度绩效。它是在需要采取某种措施前，允许出现的最大差异。临界值通常用偏离基准计划中的参数的某个百分数来表示。</li>
                                    <li>绩效测量规则。需要规定用于绩效测量的挣值管理（EVM）规则或其他测量规则。例如，进度管理计划可能规定：</li>
                                    <li>确定完成百分比的规则；</li>
                                    <li>EVM 技术，如基准法、固定公式法、完成百分比法等。更多信息，参阅《挣值管理实践标准》[17]；</li>
                                    <li>进度绩效测量指标，如进度偏差（SV）和进度绩效指数（SPI），用来评价偏离原始进度基准的程度。</li>
                                    <li>报告格式。需要规定各种进度报告的格式和编制频率。</li>
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