import React, { Component } from 'react'

import {
    //BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'

import { Provider } from 'mobx-react';

import '../static/css/markdown.css'

import $ from 'jquery';

import menuList from '../static/data/menu.json';

import MyRoute from './route';

import {common} from '../common';

export default class Main extends Component {

    componentDidMount() {

        $('.sidebar-body .catalog-body i.caret').click(function () {
            if ($(this).parent("li").hasClass("open")) {
                $(this).parent("li").removeClass("open");
                $(this).addClass("right")
                $(this).removeClass("down");
            } else {
                $(this).parent("li").addClass("open");
                $(this).addClass("down")
                $(this).removeClass("right");
            }
        });

        $('.sidebar-body .catalog-body li a').click(function () {
            $('li').removeClass("active");
            $(this).parent("li").addClass("active").siblings().removeClass("active");
        });


        let _c, _t;
        if (window.location.hash) {
            _c = window.location.hash;
            _c = _c.substr(_c.indexOf('#'))
        } else {
            _c = window.location.pathname;
        }

        $('.sidebar-body .catalog-body li a').each(function (i) {
            let t = $(this);
            if ($(this).attr("href") == _c) {
                $('li').removeClass("active");
                console.log($(this).parents("ul").parents("li"))
                $(this).parent("li").addClass("active").siblings().removeClass("active");

                $(this).parents("ul").parents("li").addClass("open");
                console.log($(this).parents("ul").parents("li").find("i.icon.caret"))
                $(this).parents("ul").parents("li").find("i.icon.caret").removeClass("right").addClass("down");
            }
        })

        if(common.isMobile()){
            $('a.text').click(function(){
                $(".window-body").removeClass("with-sidebar");
            });
            $(".window-body").removeClass("with-sidebar");
        }
    }


    componentWillUpdate() {
        // 当组件的props发生改变时，组件更新，会调用如下的生命周期钩子
        // "componentWillReceiveProps"
        // "shouldComponentUpdate"
        // "componentWillUpdate"
        // "render"
        // "componentDidUpdate"
        //alert(1433)
    }



    render() {
        return (
            <Provider>
                <Router>
                    <div id="main">
                        <div className="root">
                            <div className="window-container">
                                <div className="window-head">
                                    <div className="toolbar">
                                        <a href="#" className="title" >PMBOK6.0系统解析</a>
                                        <div className="extra"></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: "100%" }}></div>
                                </div>
                                <div className="window-body with-sidebar">
                                    <div className="sidebar">
                                        <div className="sidebar-header">
                                            <div className="search-form">
                                                <div className="ui small fluid icon input">
                                                    <input type="text" placeholder="请输入搜索关键词..." />
                                                    <i className="icon search"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-body">
                                            <div className="catalog-body active">
                                                <ul>
                                                    <li className="active">
                                                        <div className="wholerow"></div>
                                                        <i className="icon"></i>
                                                        <Link to="/pre/face" className="text">序言 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                                    </li>
                                                    <li className="">
                                                        <div className="wholerow"></div>
                                                        <i className="icon caret right"></i>
                                                        <a href="#" className="text">第一章 启动过程组</a>
                                                        <ul>
                                                            {
                                                                menuList.startup.map((data) =>
                                                                    <li className="">
                                                                        <div className="wholerow"></div>
                                                                        <i className="icon"></i>
                                                                        <Link to={data.link} className="text">{data.index} {data.name} </Link>
                                                                    </li>
                                                                )}
                                                        </ul>
                                                    </li>
                                                    <li className="">
                                                        <div className="wholerow"></div>
                                                        <i className="icon caret right"></i>
                                                        <a href="#" className="text">第二章 规划过程组</a>
                                                        <ul>
                                                            {
                                                                menuList.plan.map((data) =>
                                                                    <li className="">
                                                                        <div className="wholerow"></div>
                                                                        <i className="icon"></i>
                                                                        <Link to={data.link} className="text">{data.index} {data.name} </Link>
                                                                    </li>
                                                                )}
                                                        </ul>
                                                    </li>
                                                    <li className="">
                                                        <div className="wholerow"></div>
                                                        <i className="icon caret right"></i>
                                                        <a href="#" className="text">第三章 执行过程组</a>
                                                        <ul>
                                                            {
                                                                menuList.implement.map((data) =>
                                                                    <li className="">
                                                                        <div className="wholerow"></div>
                                                                        <i className="icon"></i>
                                                                        <Link to={data.link} className="text">{data.index} {data.name} </Link>
                                                                    </li>
                                                                )}
                                                        </ul>
                                                    </li>
                                                    <li className="">
                                                        <div className="wholerow"></div>
                                                        <i className="icon caret right"></i>
                                                        <a href="#" className="text">第四章 监控过程组</a>
                                                        <ul>
                                                            {
                                                                menuList.monitor.map((data) =>
                                                                    <li className="">
                                                                        <div className="wholerow"></div>
                                                                        <i className="icon"></i>
                                                                        <Link to={data.link} className="text">{data.index} {data.name} </Link>
                                                                    </li>
                                                                )}
                                                        </ul>
                                                    </li>
                                                    <li className="">
                                                        <div className="wholerow"></div>
                                                        <i className="icon caret right"></i>
                                                        <a href="#" className="text">第五章 收尾过程组</a>
                                                        <ul>
                                                            {
                                                                menuList.end.map((data) =>
                                                                    <li className="">
                                                                        <div className="wholerow"></div>
                                                                        <i className="icon"></i>
                                                                        <Link to={data.link} className="text">{data.index} {data.name} </Link>
                                                                    </li>
                                                                )}
                                                        </ul>
                                                    </li>
                                                    <li className="">
                                                        <div className="wholerow"></div>
                                                        <i className="icon caret right"></i>
                                                        <a href="#" className="text">附录一 项目管理计划</a>
                                                        <ul>
                                                            {
                                                                menuList.project.map((data) =>
                                                                    <li className="">
                                                                        <div className="wholerow"></div>
                                                                        <i className="icon"></i>
                                                                        <Link to={data.link} className="text">{data.index} {data.name} </Link>
                                                                    </li>
                                                                )}
                                                        </ul>
                                                    </li>

                                                    <li className="">
                                                        <div className="wholerow"></div>
                                                        <i className="icon caret right"></i>
                                                        <a href="#" className="text">附录二 项目文件</a>
                                                        <ul>
                                                            {
                                                                menuList.projectFile.map((data) =>
                                                                    <li className="">
                                                                        <div className="wholerow"></div>
                                                                        <i className="icon"></i>
                                                                        <Link to={data.link} className="text">{data.index} {data.name} </Link>
                                                                    </li>
                                                                )}
                                                        </ul>
                                                    </li>

                                                    <li className="">
                                                        <div className="wholerow"></div>
                                                        <i className="icon caret right"></i>
                                                        <a href="#/appreciateRankList" className="text">赞赏榜</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sidebar-copyright">
                                            本<a href="https://github.com/xulayen/pmp" target="_blank">文档</a>由<a href="http://xulayen.com" target="_blank">徐导</a>强力驱动
                                        </div>
                                    </div>
                                    <div className="workspace">
                                        <MyRoute />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}