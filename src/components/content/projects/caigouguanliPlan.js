import React, { Component } from 'react';

export default class CaiGouGuanLiPlan extends Component {

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
                        <h1>采购管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    采购管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                采购管理计划包含要在采购过程中开展的各种活动。它应该记录是否要开展国际竞争性招标、国内竞争性招标、当地招标等。如果项目由外部资助，资金的来源和可用性应符合采购管理计划和项目进度计划的规定。
                            <br />
                                采购管理计划可包括以下内容：
                            </h4>
                            <h4>
                                <ul>
                                    <li>如何协调采购与项目的其他工作，例如，项目进度计划制定和控制；</li>
                                    <li>开展重要采购活动的时间表；</li>
                                    <li>用于管理合同的采购测量指标；</li>
                                    <li>与采购有关的相关方角色和职责；如果执行组织有采购部，项目团队拥有的职权和受到的限制；</li>
                                    <li>可能影响采购工作的制约因素和假设条件；</li>
                                    <li>司法管辖权和付款货币；</li>
                                    <li>是否需要编制独立估算，以及是否应将其作为评价标准；</li>
                                    <li>风险管理事项，包括对履约保函或保险合同的要求，以减轻某些项目风险；</li>
                                    <li>拟使用的预审合格的卖方（如果有）。</li>
                                </ul>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                根据每个项目的需要，采购管理计划可以是正式或非正式的，非常详细或高度概括的。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}