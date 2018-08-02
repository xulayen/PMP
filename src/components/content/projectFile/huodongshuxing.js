import React, { Component } from 'react';

export default class HuoDongShuXing extends Component {

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
                        <h1>活动属性</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    活动属性
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                            活动属性是指每项活动所具有的多重属性，用来扩充对活动的描述，活动属性随时间演进。在项目初始阶段，活动属性包括唯一活动标识 (ID)、WBS 标识和活动标签或名称；在活动属性编制完成时，活动属性可能包括活动描述、紧前活动、紧后活动、逻辑关系、提前量和滞后量（见 6.3.2.3 节）、资源需求、强制日期、制约因素和假设条件。活动属性可用于识别开展工作的地点、编制开展活动的项目日历，以及相关的活动类型。活动属性还可用于编制进度计划。根据活动属性，可在报告中以各种方式对计划进度活动进行选择、排序和分类。
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