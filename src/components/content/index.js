import React, { Component } from 'react';


import ProjectPlan from './projectPlan';
import ProjectFileEg from './projectFileEg';
import ProjectFileUpdate from './projectFileUpdate';
import ProjectPlanUpdate from './projectPlanUpdate';
import ProjectImgs from './projectImgs';
import navData from '../../static/data/nav';

import { common } from '../../common';

import Gitalk from '../gitalk';

import $ from 'jquery';

export default class Content extends Component {

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

    componentWillUpdate() {
        // 当组件的props发生改变时，组件更新，会调用如下的生命周期钩子
        // "componentWillReceiveProps"
        // "shouldComponentUpdate"
        // "componentWillUpdate"
        // "render"
        // "componentDidUpdate"
        this.getAbout();
    }

    componentDidMount() {
        $(".item.icon").click(function () {
            $(".window-body").toggleClass("with-sidebar")
        });
    }

    getAbout() {
        let _c = common.getRouteName();
        console.log(navData)
        this.nav = navData[_c]
    }



    render() {
        const nav = this.nav;
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
                        <h1>{nav.name}</h1>
                    </div>
                    <div className="article-body">
                        <h4 data-line="2" className="line" style={{ textIndent: "2em" }} dangerouslySetInnerHTML={{ __html: nav.remark }}>

                        </h4>
                        <ProjectImgs navData={navData} />

                        <ProjectPlan navData={navData} />

                        <ProjectFileEg navData={navData} />

                        <ProjectFileUpdate navData={navData} />

                        <ProjectPlanUpdate navData={navData} />

                    </div>
                </div>
                <Gitalk />
            </div>
        )
    }
}