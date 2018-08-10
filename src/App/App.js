import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div id="main">
        <div className="root">
          <div className="window-container">
            <div className="window-head">
              <div className="toolbar">
                <a className="title" href="#">PMBOK6.0</a>
                <div className="extra"></div>
              </div>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{width: "25%"}}></div>
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
                        <a href="#" className="text">序言</a>
                      </li>
                      <li className="open">
                        <div className="wholerow"></div>
                        <i className="icon caret down"></i>
                        <a href="#" className="text">algate.github.io的网站建设</a>
                        <ul>
                          <li className="">
                            <div className="wholerow"></div>
                            <i className="icon"></i>
                            <a href="#" className="text">algate.github.io基础完善</a>
                          </li>
                          <li className="">
                            <div className="wholerow"></div>
                            <i className="icon"></i>
                            <a href="#" className="text">如何在github上展示作品——为你的项目生成一个快速访问的网址</a>
                          </li>
                          <li className="">
                            <div className="wholerow"></div>
                            <i className="icon"></i>
                            <a href="#" className="text">Github README.md 添加图片</a>
                          </li>
                          <li className="">
                            <div className="wholerow"></div>
                            <i className="icon"></i>
                            <a href="#" className="text">git上传github常用命令</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-copyright"></div>
              </div>
              <div className="workspace">
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
                                        <strong>初识docker，却不知道如何下手结合自身需求的新手</strong>
                      </h5>
                      <h5 data-line="8" className="line">
                        <a id="2__8"></a>2.
                                        <strong>想了解自动化打包的开发、运维人员</strong>
                      </h5>
                      <h5 data-line="9" className="line">
                        <a id="3__9"></a>3.
                                        <strong>想了解容器概念与实际运用的开发人员</strong>
                      </h5>
                      <h5 data-line="10" className="line">
                        <a id="4__10"></a>4.
                                        <strong>想搭建企业内部强大及实用的自动化工程的开发团队</strong>
                      </h5>
                      <h5 data-line="11" className="line">
                        <a id="5__11"></a>5.
                                        <strong>想知道新颖容器技术如何实际运用的吃瓜群众</strong>
                      </h5>
                      <blockquote className="warning">
                        <h4>
                          <a id="_13"></a>阅读指南</h4>
                      </blockquote>
                      <h5 data-line="15" className="line">
                        <a id="dockerdockerdocker_15"></a>第一章来解释什么是容器，docker是什么、为什么要用docker、docker能做什么等相关问题。</h5>
                      <h5 data-line="16" className="line">
                        <a id="docker_16"></a>第二章主要是进行安装docker相关问题和注意事项。</h5>
                      <h5 data-line="17" className="line">
                        <a id="dockerdocker_17"></a>第三章将进入实际操作，前面会简单描述docker的架构，后面会开始实际操作docker的创建于简单实用。</h5>
                      <h5 data-line="18" className="line">
                        <a id="docker_18"></a>第四章主要是涉及到docker的内部网络机制，相对于其他的章节属于难点，如果有问题可以加入一起讨论。</h5>
                      <h5 data-line="19" className="line">
                        <a id="dockerdockerdockerData_volumebind_mount_19"></a>第五章是docker数据持久化，当docker被停止和删除时如何让docker上的数据依然保持完整，运用Data volume与bind mount的方式实现。</h5>
                      <h5 data-line="20" className="line">
                        <a id="docker_20"></a>第六章开始着手开发工具的选择与实践部署，另外还有docker的水平扩展与负载均衡。</h5>
                      <h5 data-line="21" className="line">
                        <a id="dockerswarmServiceRoutingMeshIngress_21"></a>第七章开始更加复杂的docker实例编排，swarm集群与Service的创建维护，集群服务器之间通信，RoutingMesh的Ingress负载均衡</h5>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
