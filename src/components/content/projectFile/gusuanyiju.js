import React, { Component } from 'react';

export default class GuSuanYiJu extends Component {

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
                        <h1>估算依据</h1>
                    </div>
                    <div className="article-body">
                        <div>
                            <blockquote className="info">
                                <h4>
                                    估算依据
                                </h4>
                            </blockquote>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                持续时间估算所需的支持信息的数量和种类，因应用领域而异。不论其详细程度如何，支持性文件都应该清晰、完整地说明持续时间估算是如何得出的。
                            </h4>
                            <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                                持续时间估算的支持信息可包括：
                            </h4>
                            <h4>
                                <ul>
                                    <li>关于估算依据的文件（如估算是如何编制的）</li>
                                    <li>关于全部假设条件的文件</li>
                                    <li>关于各种已知制约因素的文件</li>
                                    <li>对估算区间的说明（如“±10%”），以指出预期持续时间的所在区间</li>
                                    <li>对最终估算的置信水平的说明</li>
                                    <li>有关影响估算的单个项目风险的文件</li>
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