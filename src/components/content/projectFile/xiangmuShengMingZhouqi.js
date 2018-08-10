
import React, { Component } from 'react';import ContentMain from '../index';

export default class XiangMuShengMingZhouQi extends ContentMain {

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
                        <h1>项目生命周期</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    项目生命周期
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                项目生命周期指项目从开始到完成所经历的一系列阶段。项目阶段是一组具有逻辑关系的项目活动的集合，通常以一个或多个可交付成果的完成为结束。这些阶段之间可能是顺序、迭代或交叠的关系。项目阶段的名称、数量和持续时间取决于参与项目的一个或多个组织的管理与控制需要、项目本身的特征及其所在的应用领域。阶段都有时限，有一个起始点、结束点或控制点（有时称为阶段审查、阶段关口或控制关口，也可以用其他类似名称）。在控制点，需要根据当前环境，重新审查项目章程和商业文件。在该时点，把项目绩效与项目管理计划进行比较，以确定项目是否应该变更、终止或按计划继续。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                项目生命周期会受组织、行业、开发方法或所用技术的独特性质的影响。虽然每个项目都有起点和终点，但具体的可交付成果及工作会因项目的不同而有很大差异。不论项目涉及的具体工作是什么，生命周期都可以为管理项目提供基本框架。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                虽然项目规模及复杂程度各不相同，但是典型项目都呈现下列项目生命周期结构
                            </h4>
                            <h4>
                                <ul>

                                    <li>开始项目</li>
                                    <li>组织与准备</li>
                                    <li>执行项目工作</li>
                                    <li>结束项目</li>

                                </ul>

                                <p className="align-center">
                                    <img alt="" src={require('../../../static/images/xiangmushengmingzhouqi/1.png')} />
                                </p>
                                通用的生命周期结构一般具有以下特征：
                            <ul>

                                    <li>成本与人力投入在开始时较低，在工作执行期间逐渐增加，并在项目快要结束时迅速回落。</li>
                                    <li>项目开始时风险最大，如图所示。在项目的整个生命周期中，随着决策的制定与可交付成果的验收，风险会逐步降低。</li>
                                    <li>在不显著影响成本和进度的前提下，相关方改变项目产品最终特性的能力在项目开始时最大，并随项目进展而减弱。图表明，做出变更和纠正错误的成本，通常会随着项目越来越接近完成而显著增高。</li>




                                </ul>

                                <p className="align-center">
                                    <img alt="" src={require('../../../static/images/xiangmushengmingzhouqi/2.png')} />
                                </p>
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