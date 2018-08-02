import React, { Component } from 'react';

export default class GongFangXuanZeBiaoZhun extends Component {

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
                        <h1>供方选择标准</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                供方选择标准
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                            在确定评估标准时，买方要努力确保选出的建议书将提供最佳质量的所需服务。供方选择标准可包括（但不限于）：
                            </h4>
                            <h4>
                                <ul>
                                    <li>身份信息。姓名、组织职位、地点、联系方式，以及在项目中扮演的角色。</li>
                                    <li>能力和潜能</li>
                                    <li>产品成本和生命周期成本</li>
                                    <li>交付日期</li>
                                    <li>技术专长和方法</li>
                                    <li>具体的相关经验</li>
                                    <li>用于响应工作说明书的工作方法和工作计划</li>
                                    <li>关键员工的资质、可用性和胜任力</li>
                                    <li>公司的财务稳定性</li>
                                    <li>管理经验</li>
                                    <li>知识转移计划，包括培训计划</li>
                                </ul>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                            针对国际项目，评估标准还可包括“本地内容”要求，例如，在提议的关键员工中要有本国人。


                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                            

针对不同的标准，可以用数值分数、颜色代码或书面描述，来说明卖方满足采购组织需求的程度。这些标准是加权系统的组成部分，可据此以加权打分的方法排列所有建议书的顺序，以便确定谈判的顺序，并与某个卖方签订合同。
                            </h4>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}