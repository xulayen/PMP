import React, { Component } from 'react';

export default class FanWeiJiZhun extends Component {

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
                        <h1>范围基准</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    范围基准
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                范围基准是经过批准的范围说明书、WBS 和相应的 WBS 词典，只有通过正式的变更控制程序才能进行变更，它被用作比较的基础。范围基准是项目管理计划的组成部分，包括：
                            </h4>
                            <h4>
                                <ul>
                                    <li>项目范围说明书。项目范围说明书包括对项目范围、主要可交付成果、假设条件和制约因素的描述。</li>
                                    <li>WBS。WBS 是对项目团队为实现项目目标、创建所需可交付成果而需要实施的全部工作范围的层级分解。工作分解结构每向下分解一层，代表对项目工作更详细的定义。</li>
                                    <li>工作包。WBS 的最低层级是带有独特标识号的工作包。这些标识号为进行成本、进度和资源信息的逐层汇总提供了层级结构，构成账户编码。每个工作包都是控制账户的一部分，而控制账户则是一个管理控制点。在该控制点上，把范围、预算和进度加以整合，并与挣值相比较，以测量绩效。控制账户拥有两个或更多工作包，但每个工作包只与一个控制账户关联。</li>
                                    <li>规划包。一个控制账户可以包含一个或多个规划包，其是一种低于控制账户而高于工作包的工作分解结构组件，工作内容已知，但详细的进度活动未知。</li>
                                    <li>WBS 词典。WBS 词典是针对 WBS 中的每个组件，详细描述可交付成果、活动和进度信息的文件。WBS 词典对 WBS 提供支持，其中大部分信息由其他过程创建，然后在后期添加到词典中。WBS 词典中的内容可能包括（但不限于）：</li>
                                    <li>账户编码标识</li>
                                    <li>工作描述</li>
                                    <li>假设条件和制约因素</li>
                                    <li>负责的组织</li>
                                    <li>进度里程碑</li>
                                    <li>相关的进度活动</li>
                                    <li>所需资源</li>
                                    <li>成本估算</li>
                                    <li>质量要求</li>
                                    <li>验收标准</li>
                                    <li>技术参考文献</li>
                                    <li>协议信息</li>
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