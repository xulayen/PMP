import React, { Component } from 'react';import ContentMain from '../index';

export default class FanWeiShuoMingShu extends ContentMain {

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
                        <h1>范围说明书</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    范围说明书
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                项目范围说明书是对项目范围、主要可交付成果、假设条件和制约因素的描述。它记录了整个范围，包括项目和产品范围；详细描述了项目的可交付成果；还代表项目相关方之间就项目范围所达成的共识。为便于管理相关方的期望，项目范围说明书可明确指出哪些工作不属于本项目范围。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                项目范围说明书使项目团队能进行更详细的规划，在执行过程中指导项目团队的工作，并为评价变更请求或额外工作是否超过项目边界提供基准。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                项目范围说明书描述要做和不要做的工作的详细程度，决定着项目管理团队控制整个项目范围的有效程度。详细的项目范围说明书包括以下内容（可能直接列出或参引其他文件）：
                            </h4>
                            <h4>
                                <ul>
                                    <li>产品范围描述。逐步细化在项目章程和需求文件中所述的产品、服务或成果的特征。</li>
                                    <li>可交付成果。为完成某一过程、阶段或项目而必须产出的任何独特并可核实的产品、成果或服务能力，可交付成果也包括各种辅助成果，如项目管理报告和文件。对可交付成果的描述可略可详。</li>
                                    <li>验收标准。可交付成果通过验收前必须满足的一系列条件。</li>
                                    <li>项目的除外责任。识别排除在项目之外的内容。明确说明哪些内容不属于项目范围，有助于管理相关方的期望及减少范围蔓延。</li>
                                </ul>
                            </h4>
                            <p className="align-center">

                                <img alt="" src={require('../../../static/images/fanweishuomingshu/1.png')} />

                            </p>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                虽然项目章程和项目范围说明书的内容存在一定程度的重叠，但它们的详细程度完全不同。项目章程包含高层级的信息，而项目范围说明书则是对范围组成部分的详细描述，这些组成部分需要在项目过程中渐进明细。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}