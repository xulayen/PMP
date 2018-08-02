import React, { Component } from 'react';

//沟通管理计划
export default class GouTongGuanliJihua extends Component {

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
                        <h1>沟通管理计划</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    沟通管理计划
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                沟通管理计划是项目管理计划的组成部分，描述将如何规划，结构化、执行与监督项目沟通，以提高沟通的有效性。该计划包括如下信息：
                            </h4>
                            <h4>
                                <ol>
                                    <li>相关方的沟通需求</li>
                                    <li>需沟通的信息，包括语言、形式、内容和详细程度</li>
                                    <li>上报步骤</li>
                                    <li>发布信息的原因</li>
                                    <li>发布所需信息、确认已收到，或作出回应（若适用）的时限和频率</li>
                                    <li>负责沟通相关信息的人员</li>
                                    <li>负责授权保密信息发布的人员</li>
                                    <li>接收信息的人员或群体，包括他们的需要、需求和期望</li>
                                    <li>用于传递信息的方法或技术，如备忘录、电子邮件、新闻稿，或社交媒体</li>
                                    <li>为沟通活动分配的资源，包括时间和预算</li>
                                    <li>随着项目进展，如项目不同阶段相关方社区的变化，而更新与优化沟通管理计划的方法</li>
                                    <li>通用术语表</li>
                                    <li>项目信息流向图、工作流程（可能包含审批程序）、报告清单和会议计划等</li>
                                    <li>来自法律法规、技术、组织政策等的制约因素。</li>
                                </ol>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                沟通管理计划中还包括关于项目状态会议、项目团队会议、网络会议和电子邮件等的指南和模板。如果项目要使用项目网站和项目管理软件，那就要把它们写进沟通管理计划。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}