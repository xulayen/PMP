import React, { Component } from 'react';import ContentMain from '../index';

export default class FengXianDengJiCe extends ContentMain {

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
                        <h1>风险登记册</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    风险登记册
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                风险登记册记录已识别单个项目风险的详细信息。随着实施定性风险分析、规划风险应对、实施风险应对和监督风险等过程的开展，这些过程的结果也要记进风险登记册。取决于具体的项目变量（如规模和复杂性），风险登记册可能包含有限或广泛的风险信息。
                                <br />
                                当完成识别风险过程时，风险登记册的内容可能包括（但不限于）：
                            </h4>
                            <h4>
                                <ol>
                                    <li>已识别风险的清单。在风险登记册中，每项单个项目风险都被赋予一个独特的标识号。要以所需的详细程度对已识别风险进行描述，确保明确理解。可以使用结构化的风险描述，来把风险本身与风险原因及风险影响区分开来。</li>
                                    <li>潜在风险责任人。如果已在识别风险过程中识别出潜在的风险责任人，就要把该责任人记录到风险登记册中。随后将由实施定性风险分析过程进行确认。</li>
                                    <li>潜在风险应对措施清单。如果已在识别风险过程中识别出某种潜在的风险应对措施，就要把它记录到风险登记册中。随后将由规划风险应对过程进行确认。</li>
                                </ol>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                根据风险管理计划规定的风险登记册格式，可能还要记录关于每项已识别风险的其他数据，包括：简短的风险名称、风险类别、当前风险状态、一项或多项原因、一项或多项对目标的影响、风险触发条件（显示风险即将发生的事件或条件）、受影响的 WBS组件，以及时间信息（风险何时识别、可能何时发生、何时可能不再相关，以及采取行动的最后期限）。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}