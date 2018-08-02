import React, { Component } from 'react';

export default class ZiYuanGuanLiPlan extends Component {

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
                        <h1>资源管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    资源管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                作为项目管理计划的一部分，资源管理计划提供了关于如何分类、分配、管理和释放项目资源的指南。资源管理计划可以根据项目的具体情况分为团队管理计划和实物资源管理计划。资源管理计划可能包括（但不限于）：
                            </h4>
                            <h4>
                                <ul>
                                    <li>识别资源。用于识别和量化项目所需的团队和实物资源的方法。</li>
                                    <li>获取资源。关于如何获取项目所需的团队和实物资源的指南。</li>
                                    <li>角色与职责。</li>
                                    <li>角色。在项目中，某人承担的职务或分配给某人的职务，如土木工程师、商业分析师和测试协调员。</li>
                                    <li>职权。使用项目资源、做出决策、签字批准、验收可交付成果并影响他人开展项目工作的权力。例如，下列事项都需要由具有明确职权的人来做决策：选择活动的实施方法，质量验收标准，以及如何应对项目偏差等。当个人的职权水平与职责相匹配时，团队成员就能最好地开展工作。</li>
                                    <li>职责。为完成项目活动，项目团队成员必须履行的职责和工作。</li>
                                    <li>能力。为完成项目活动，项目团队成员需具备的技能和才干。如果项目团队成员不具备所需的能力，就不能有效地履行职责。一旦发现成员的能力与职责不匹配，就应主动采取措施，如安排培训、招募新成员、调整进度计划或工作范围。</li>
                                    <li>项目组织图。项目组织图以图形方式展示项目团队成员及其报告关系。基于项目的需要，项目组织图可以是正式或非正式的，非常详细或高度概括的。例如，一个 3000 人的灾害应急团队的项目组织图，要比仅有 20 人的内部项目的组织图详尽得多。</li>
                                    <li>项目团队资源管理。关于如何定义、配备、管理和最终遣散项目团队资源的指南。</li>
                                    <li>培训。针对项目成员的培训策略。</li>
                                    <li>团队建设。建设项目团队的方法。</li>
                                    <li>资源控制。依据需要确保实物资源充足可用、并为项目需求优化实物资源采购，而采用的方法。包括有关整个项目生命周期期间的库存、设备和用品管理的信息。</li>
                                    <li>认可计划。将给予团队成员哪些认可和奖励，以及何时给予。</li>
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