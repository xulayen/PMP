import React, { Component } from 'react';


import aboutList from '../../static/data/about';

import Gitalk from '../gitalk';

import ContentMain from '../content';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Document, Page } from 'react-pdf';

import c1 from './pdfs/PMBOK6.0.pdf';
import c2 from './pdfs/beikaoshenqi.pdf';
import c3 from './pdfs/siweidaotu.pdf';
import { observer, inject } from 'mobx-react';

const s = null;

@inject(['pageStore'])
@observer
export default class PdfReader extends ContentMain {

    
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    loadPDF(){
        var h = window.location.hash;
        if (h == '#/pdf/reader/1') {
            s = c1;
        } else if (h == '#/pdf/reader/2') {
            s = c2;
        } else if (h == '#/pdf/reader/3') {
            s = c3;
        }else{
            s = c1;
        }
    }

    componentWillMount(){
        this.loadPDF();
    }

    componentWillUpdate(){
        this.loadPDF();
    }

    onDocumentLoad = ({ numPages }) => {
        this.props.pageStore.setnumPages(numPages)
    }

    pre = (e) => {
        this.props.pageStore.pre();
    }

    next = (e) => {
        this.props.pageStore.next();
    }

    changePage = (e) => {
        this.props.pageStore.change(e.target.value);
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
                    </div>


                    <div className="article-body">
                        <div >
                            <Document
                                file={s}
                                onLoadSuccess={this.onDocumentLoad}  >
                                <Page pageNumber={this.props.pageStore.pageNumber} />
                            </Document>


                        </div>




                    </div>
                    <p style={{ float: "right", margin: "-50em 15em 0 0", userSelect: "none" }}>
                        <p>
                            第 {this.props.pageStore.pageNumber} / {this.props.pageStore.numPages} &nbsp;页   &nbsp;
                                    <a style={{ cursor: "pointer" }} onClick={this.pre.bind(this)}><span>上一页</span></a>
                            &nbsp;&nbsp;&nbsp;
                                    <a style={{ cursor: "pointer" }} onClick={this.next.bind(this)}><span>下一页</span></a>
                            <br />
                            <input style={{ width: "50px", float: "right" }} type="num" value={this.props.pageStore.pageNumber} onChange={this.changePage.bind(this)} />
                        </p>

                    </p>


                </div>
            </div>
        )
    }
}