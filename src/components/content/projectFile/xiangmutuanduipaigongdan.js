
import React, { Component } from 'react';

export default class XiangMuTuanDuiPaiGongDan extends Component {

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
                        <h1>项目团队派工单</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                项目团队派工单
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                            项目团队派工单记录了团队成员及其在项目中的角色和职责，可包括项目团队名录，还需要把人员姓名插入项目管理计划的其他部分，如项目组织图和进度计划。
                            </h4>
                            {/* <ol>
                                <li></li>
                            </ol> */}
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