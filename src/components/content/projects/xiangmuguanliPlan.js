import React, { Component } from 'react';
import ContentMain from '../index';



export default class XiangMuGuanLiPlan extends ContentMain {

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
        const hashName = window.location.hash ? "/#" : "";
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
                        <h1>项目管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    项目管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                项目管理计划是说明项目执行、监控和收尾方式的一份文件，它整合并综合了所有子管理计划和基准，以及管理项目所需的其他信息。究竟需要哪些项目管理计划组件，取决于具体项目的需求。项目管理计划组件包括（但不限于）：
                            </h4>
                            <h4>
                                <ul>
                                    <li><a href={hashName + "/chapter/project/fanweiguanliPlan"}>范围管理计划</a>。确立如何定义、制定、监督、控制和确认项目范围。</li>
                                    <li><a href={hashName + "/chapter/project/xuqiuguanliPlan"}>需求管理计划</a>。确定如何分析、记录和管理需求。</li>
                                    <li><a href={hashName + "/chapter/project/jingduguanliPlan"}>进度管理计划</a>。为编制、监督和控制项目进度建立准则并确定活动。</li>
                                    <li><a href={hashName + "/chapter/project/chengbenguanliPlan"}>成本管理计划</a>。确定如何规划、安排和控制成本。</li>
                                    <li><a href={hashName + "/chapter/project/zhiliangguanliPlan"}>质量管理计划</a>。确定在项目中如何实施组织的质量政策、方法和标准。</li>
                                    <li><a href={hashName + "/chapter/project/ziyuanguanliPlan"}>资源管理计划</a>。指导如何对项目资源进行分类、分配、管理和释放。</li>
                                    <li><a href={hashName + "/chapter/project/goutongguanliPlan"}>沟通管理计划</a>。确定项目信息将如何、何时、由谁来进行管理和传播。</li>
                                    <li><a href={hashName + "/chapter/project/fengxianguanliPlan"}>风险管理计划</a>。确定如何安排与实施风险管理活动。</li>
                                    <li><a href={hashName + "/chapter/project/caigouguanliPlan"}>采购管理计划</a>。确定项目团队将如何从执行组织外部获取货物和服务。</li>
                                    <li><a href={hashName + "/chapter/project/ganxirenguanliPlan"}>相关方参与计划</a>。确定如何根据相关方的需求、利益和影响让他们参与项目决策和执行。</li>
                                    <li><a href={hashName + "/chapter/project/fanweiJiZhun"}>范围基准</a>。经过批准的范围说明书、工作分解结构 (WBS) 和相应的 WBS 词典，用作比较依据。</li>
                                    <li><a href={hashName + "/chapter/project/jinduJiZhun"}>进度基准</a>。经过批准的进度模型，用作与实际结果进行比较的依据。</li>
                                    <li><a href={hashName + "/chapter/project/chengbenJiZhun"}>成本基准</a>。经过批准的、按时间段分配的项目预算，用作与实际结果进行比较的依据。</li>
                                    <li>其他组件。大多数项目管理计划组件都来自于其他过程，虽然有些组件是在本过程生成的。</li>
                                </ul>
                                虽然在本过程生成的组件会因项目而异，但是通常包括（但不限于）：
                                <ul>
                                    <li>变更管理计划。描述在整个项目期间如何正式审批和采纳变更请求。</li>
                                    <li>配置管理计划。描述如何记录和更新项目的特定信息，以及该记录和更新哪些信息，以保持产品、服务或成果的一致性和（或）有效性。</li>
                                    <li>绩效测量基准。经过整合的项目范围、进度和成本计划，用作项目执行的比较依据，以测量和管理项目绩效。</li>
                                    <li>项目生命周期。描述项目从开始到结束所经历的一系列阶段。</li>
                                    <li>开发方法。描述产品、服务或成果的开发方法，例如预测、迭代、敏捷或混合型模式。</li>
                                    <li>管理审查。确定项目经理和有关相关方审查项目进展的时间点，以考核绩效是否符合预期，或者确定是否有必要采取预防或纠正措施。</li>
                                </ul>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                项目管理计划是用于管理项目的主要文件之一。管理项目时还会使用其他项目文件。这些其他文件不属于项目管理计划，但它们也是实现高效管理所必需的文件。序言表列出了主要的项目管理计划组件和项目文件。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}