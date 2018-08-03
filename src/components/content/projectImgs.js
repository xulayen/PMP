import React, { Component } from 'react';
import {common} from '../../common';
export default class projectFileEg extends Component {

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

    getAbout() {
        let _c=common.getRouteName();
        console.log(this.props.navData)
        this.nav = this.props.navData[_c]
    }



    render() {
        const nav = this.nav;
        if (nav) {
            return (
                <p className="align-center">
                    {
                        nav.imgs[0]?<img alt="" src={require('../../static/'+nav.imgs[0])}/>:''
                    }
                    {
                        nav.imgs[1]?<img alt="" src={require('../../static/'+nav.imgs[1])}/>:''
                    }{
                        nav.imgs[2]?<img alt="" src={require('../../static/'+nav.imgs[2])}/>:''
                    }
                </p>
            )
        } else {
            return null;
        }
    }
}