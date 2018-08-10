import React, { Component } from 'react';
import ContentMain from '../index';
export default class ChengBenGuanliPlan extends ContentMain {

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
                        <h1>成本管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    成本管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                成本管理计划是项目管理计划的组成部分，描述将如何规划、安排和控制项目成本。成本管理过程及其工具与技术应记录在成本管理计划中。

    例如，在成本管理计划中规定：
                            </h4>
                            <h4>
                                <ul>
                                    <li>制定项目范围说明书</li>
                                    <li>计量单位。需要规定每种资源的计量单位，例如用于测量时间的人时数、人天数或周数，用于计量数量的米、升、吨、千米或立方码，或者用货币表示的总价</li>
                                    <li>精确度。根据活动范围和项目规模，设定成本估算向上或向下取整的程度（例如 995.59 美元取整为 1,000 美元）</li>
                                    <li>准确度。为活动成本估算规定一个可接受的区间（如 ±10%），其中可能包括一定数量的应急储备</li>
                                    <li>组织程序链接。工作分解结构（见 5.4 节）为成本管理计划提供了框架，以便据此规范地开展成本估算、预算和控制。在项目成本核算中使用的 WBS 组成部分，称为控制账户（CA），每个控制账户都有唯一的编码或账号，直接与执行组织的会计制度相联系</li>
                                    <li>控制临界值。可能需要规定偏差临界值，用于监督成本绩效。它是在需要采取某种措施前，允许出现的最大差异，通常用偏离基准计划的百分数来表示</li>
                                    <li>绩效测量规则。需要规定用于绩效测量的挣值管理（EVM）规则。例如，成本管理计划应该：</li>
                                    <li>定义 WBS 中用于绩效测量的控制账户</li>
                                    <li>确定拟用的 EVM 技术（如加权里程碑法、固定公式法、完成百分比法等）</li>
                                    <li>规定跟踪方法，以及用于计算项目完工估算（EAC）的 EVM 公式，该公式计算出的结果可用于验证通过自下而上方法得出的完工估算</li>
                                    <li>报告格式。需要规定各种成本报告的格式和编制频率</li>
                                    <li>其他细节。关于成本管理活动的其他细节包括（但不限于）</li>
                                    <li>对战略筹资方案的说明</li>
                                    <li>处理汇率波动的程序</li>
                                    <li>记录项目成本的程序</li>
                                </ul>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                根据项目需要，范围管理计划可以是正式或非正式的，非常详细或高度概括的。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}