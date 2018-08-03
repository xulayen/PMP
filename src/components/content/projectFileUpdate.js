import React, { Component } from 'react';
import TemplateProject from './templateProject';
import {common} from '../../common';
export default class projectFileUpdate extends Component {

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
        this.nav = this.props.navData[_c].projectFileUpdate
    }



    render() {
        const nav = this.nav;
        if (nav) {
            return (
                <TemplateProject nav={nav} />
            )
        } else {
            return null;
        }
    }
}