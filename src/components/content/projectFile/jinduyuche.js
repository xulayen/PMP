import React, { Component } from 'react';

export default class JinDuYuCe extends Component {

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
                        <h1>进度预测</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    进度预测
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                进度更新即进度预测，指根据已有的信息和知识，对项目未来的情况和事件进行的估算或预计。
    
    
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>


                                随着项目执行，应该基于工作绩效信息，更新和重新发布预测。这些信息基于项目的过去绩效，并取决于纠正或预防措施所期望的未来绩效，可能包括挣值绩效指数，以及可能在未来对项目造成影响的进度储备信息。
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