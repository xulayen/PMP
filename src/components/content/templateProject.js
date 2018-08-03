import React, { Component } from 'react';

export default class TemplateProject extends Component {

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
        const nav = this.props.nav;
        const hashName = window.location.hash ? "/#" : "";
        if (nav) {
            return (
                <div>
                    <blockquote className="info">
                        <h4>
                            {nav.name}
                        </h4>
                    </blockquote>
                    <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                        {nav.remark}
                    </h4>
                    <ol>
                        {
                            nav.links?
                                nav.links.map(data => {
                                    return <li> <a href={hashName+data.link}>{data.name}</a> </li>
                                }):null
                        
                        }
                    </ol>
                    <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                        {nav.desc}
                    </h4>
                    <br />
                </div>
            )
        } else {
            return null;
        }
    }
}