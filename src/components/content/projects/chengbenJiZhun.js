import React, { Component } from 'react';
import ContentMain from '../index';
export default class ChenBenJiZhun extends ContentMain {

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
                        <h1>成本基准</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    成本基准
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                成本基准是经过批准的、按时间段分配的项目预算，不包括任何管理储备，只有通过正式的变更控制程序才能变更，用作与实际结果进行比较的依据。成本基准是不同进度活动经批准的预算的总和。
                            </h4>

                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                项目预算和成本基准的各个组成部分，如下图所示。先汇总各项目活动的成本估算及其应急储备，得到相关工作包的成本；然后汇总各工作包的成本估算及其应急储备，得到控制账户的成本；接着再汇总各控制账户的成本，得到成本基准。由于成本基准中的成本估算与进度活动直接关联，因此就可按时间段分配成本基准，得到一条 S 曲线，如下图所示。对于使用挣值管理的项目，成本基准指的是绩效测量基准。
                                </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                最后，在成本基准之上增加管理储备，得到项目预算。当出现有必要动用管理储备的变更时，则应该在获得变更控制过程的批准之后，把适量的管理储备移入成本基准中。
                            </h4>
                            {/* <ol>
                                <li></li>
                            </ol> */}
                            <p className="align-center">
                                <img alt="" src={require('../../../static/images/chengbenjizhun/1.png')} />
                            </p>
                            <p className="align-center">
                                <img alt="" src={require('../../../static/images/chengbenjizhun/2.png')} />
                            </p>
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