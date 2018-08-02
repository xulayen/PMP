import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';



export default class perface extends Component {
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
                        <h1>序言</h1>
                    </div>
                    <div className="article-body">
                        <blockquote className="info">
                            <h4>
                                <a id="_0"></a>主要部分</h4>
                        </blockquote>
                        <h4 data-line="2" className="line">
                            <a id="_2"></a>本教程需要以实践部分为主，理论部分相关文档已经成熟，所以不做过多解释。</h4>
                        <blockquote className="info">
                            <h4>
                                <a id="_4"></a>读者对象</h4>
                        </blockquote>
                        <h4 data-line="6" className="line">
                            <a id="_6"></a>本书适合以下人群。</h4>
                        <h5 data-line="7" className="line">
                            <a id="1_docker_7"></a>1.
                    <strong>初识PMP，却不知道如何下手结合自身需求的新手</strong>
                        </h5>
                        <h5 data-line="8" className="line">
                            <a id="2__8"></a>2.
                    <strong>想深入了解PMP内容</strong>
                        </h5>
                        <h5 data-line="9" className="line">
                            <a id="3__9"></a>3.
                    <strong>想了解PMP概念与实际运用的管理人员</strong>
                        </h5>
                        <h5 data-line="10" className="line">
                            <a id="4__10"></a>4.
                    <strong>准备报考PMP证书的项目经理</strong>
                        </h5>
                        <blockquote className="warning">
                            <h4>
                                <a id="_13"></a>阅读指南</h4>
                        </blockquote>
                        <h5 data-line="15" className="line">
                            <a id="dockerdockerdocker_15"></a>序言，来说明本站点的适合人群，也可作为工具来用。</h5>
                        <h5 data-line="16" className="line">
                            <a id="docker_16"></a>第一章主要是介绍规划过程组，以及规划过程组下的执行过程以及工具。</h5>
                        <h5 data-line="16" className="line">
                            <a id="docker_16"></a>第二章主要是介绍启动过程组，以及启动过程组下的执行过程以及工具。</h5>
                        <h5 data-line="16" className="line">
                            <a id="docker_16"></a>第三章主要是介绍执行过程组，以及执行过程组下的执行过程以及工具。</h5>
                        <h5 data-line="16" className="line">
                            <a id="docker_16"></a>第四章主要是介绍监控过程组，以及监控过程组下的执行过程以及工具。</h5>
                        <h5 data-line="16" className="line">
                            <a id="docker_16"></a>第五章主要是介绍收尾过程组，以及收尾过程组下的执行过程以及工具。</h5>

                        <blockquote className="info">
                            <h4>
                                <a id="_0"></a>项目计划和文件</h4>
                        </blockquote>
                        <p class="align-center">
                            <img alt="" src={require('../../static/images/summary.png')} />
                        </p>
                    </div>



                    <div className="article-navigation">
                        <span className="next">下一篇：
                    <a href="653237">第一章：docker概述</a>
                        </span>
                    </div>
                    <div className="article-comment">
                        <h3 className="ui header dividing">相关评论(0)</h3>
                        <form className="ui form">
                            <input type="hidden" name="article_id" value="653236" />
                            <div className="field">
                                <textarea name="content" placeholder="文明上网,理性发言" rows="4"></textarea>
                            </div>
                            <button type="submit" className="ui green submit button right floated small">发布 (Ctrl+Enter)</button>
                        </form>
                        <div className="ui comments"></div>
                    </div>
                </div>
            </div>
        )
    }
}