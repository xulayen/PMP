
import React, { Component } from 'react';

export default class XiuQiuGenZongJuZhen extends Component {

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
                        <h1>需求跟踪矩阵</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    需求跟踪矩阵
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                需求跟踪矩阵是把产品需求从其来源连接到能满足需求的可交付成果的一种表格。使用需求跟踪矩阵，把每个需求与业务目标或项目目标联系起来，有助于确保每个需求都具有商业价值。需求跟踪矩阵提供了在整个项目生命周期中跟踪需求的一种方法，有助于确保需求文件中被批准的每项需求在项目结束的时候都能交付。最后，需求跟踪矩阵还为管理产品范围变更提供了框架。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                跟踪需求包括（但不限于）：
                            </h4>
                            <h4>
                                <ul>

                                    <li>业务需要、机会、目的和目标</li>
                                    <li>项目目标</li>
                                    <li>项目范围和 WBS 可交付成果</li>
                                    <li>产品设计</li>
                                    <li>产品开发</li>
                                    <li>测试策略和测试场景</li>
                                    <li>高层级需求到详细需求</li>
                                </ul>
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                应在需求跟踪矩阵中记录每个需求的相关属性，这些属性有助于明确每个需求的关键信息。需求跟踪矩阵中记录的典型属性包括唯一标识、需求的文字描述、收录该需求的理由、所有者、来源、优先级别、版本、当前状态（如进行中、已取消、已推迟、新增加、已批准、被分配和已完成）和状态日期。为确保相关方满意，可能需要增加一些补充属性，如稳定性、复杂性和验收标准。下图是需求跟踪矩阵示例，其中列有相关的需求属性。

                            </h4>

                            <p class="align-center">
                                <img alt="" src={require('../../../static/images/xuqiugenzongjuzhen/1.png')} />
                            </p>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}