import React, { Component } from 'react';


import aboutList from '../../static/data/about';

export default class aboutModel extends Component {

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
        this.getAbout();
    }

    componentWillUpdate(){
        // 当组件的props发生改变时，组件更新，会调用如下的生命周期钩子
        // "componentWillReceiveProps"
        // "shouldComponentUpdate"
        // "componentWillUpdate"
        // "render"
        // "componentDidUpdate"
        this.getAbout();
    }

    getAbout(){
        var _c = window.location.pathname;
        var _t = _c.substr(_c.indexOf('/') + 1, _c.lastIndexOf('/') - 1)
        this.aboutData = aboutList[_t][0]
    }


    render() {
        const about=this.aboutData;
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
                        <h1>关于{about.name}</h1>
                    </div>
                    <div className="article-body">
                        <blockquote className="info">
                            <h4>
                                <a id="_0"></a>{about.name}的定义</h4>
                        </blockquote>
                        <h4 data-line="2" className="line" style={{ textIndent: "2em" }}>
                            <a id="_2"></a>
                            {about.remark}
                        </h4>
                        <br />

                        {
                            about.imgs[0]?
                                <p className="align-center" >
                                    <img alt="cc"  src={require('../../static/images/about/'+about.imgs[0])} />
                                </p> :''                            
                        }

                        {
                            about.imgs[1]?
                                <p className="align-center" >
                                    <img alt="cc"  src={require('../../static/images/about/'+about.imgs[1])} />
                                </p> :''                            
                        }
                    </div>
                </div>
            </div>
        )
    }
}