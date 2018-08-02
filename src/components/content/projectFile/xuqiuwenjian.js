import React, { Component } from 'react';

//需求文件
export default class XuQiuWenJian extends Component {

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
                        <h1>需求文件</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                需求文件
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                需求文件描述各种单一需求将如何满足与项目相关的业务需求。一开始可能只有高层级的需求，然后随着有关需求信息的增加而逐步细化。只有明确的（可测量和可测试的）、可跟踪的、完整的、相互协调的，且主要相关方愿意认可的需求，才能作为基准。需求文件的格式多种多样，既可以是一份按相关方和优先级分类列出全部需求的简单文件，也可以是一份包括内容提要、细节描述和附件等的详细文件。
                                <br />
                                许多组织把需求分为不同的种类，如业务解决方案和技术解决方案。前者是相关方的需要，后者是指如何实现这些需要。把需求分成不同的类别，有利于对需求进行进一步完善和细化。需求的类别包括：
                            </h4>
                            <ol>
                                <li>业务需求。整个组织的高层级需要，例如，解决业务问题或抓住业务机会，以及实施项目的原因。</li>
                                <li>相关方需求。相关方或相关方群体的需要。</li>
                                <li>解决方案需求。为满足业务需求和相关方需求，产品、服务或成果必须具备的特性、功能和特征。解决方案需求又进一步分为功能需求和非功能需求。</li>
                                <li>功能需求。功能需求描述产品应具备的功能，例如，产品应该执行的行动、流程、数据和交互。</li>
                                <li>非功能需求。非功能需求是对功能需求的补充，是产品正常运行所需的环境条件或质量要求，例如，可靠性、保密性、性能、安全性、服务水平、可支持性、保留或清除等。</li>
                                <li>过渡和就绪需求。这些需求描述了从“当前状态”过渡到“将来状态”所需的临时能力，如数据转换和培训需求。</li>
                                <li>项目需求。项目需要满足的行动、过程或其他条件，例如里程碑日期、合同责任、制约因素等。</li>
                                <li>质量需求。用于确认项目可交付成果的成功完成或其他项目需求的实现的任何条件或标准，例如测试、认证、确认等。</li>
                            </ol>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}