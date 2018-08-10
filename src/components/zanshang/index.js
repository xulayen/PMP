import 'gitalk/dist/gitalk.css'

import React, { Component } from 'react';

import '../../static/css/zanshang.css'

//import ContentMain from '../content';

import $ from 'jquery';

import { common } from '../../common';

export default class ZanShang extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount() {
        if (common.isMobile()) {
            let i=0;
            $('#reward').click(function () {
                if (i%2===0) {
                    $('#reward_content').css({
                        "display": "block"
                    })
                } else {
                    $('#reward_content').css({
                        "display": "none"
                    })
                }
                i++;
            })
        }
    }

    render() {
        return (
            <div>
                <div id="reward">
                    赞赏
                    <div id="reward_content">
                        <table>
                            <tbody>
                                <tr>
                                    <td class="qrcode"><img alt="" src={require("../../static/images/zanshang/wechat.jpg")} /></td>
                                    <td class="qrcode"><img alt="" src={require("../../static/images/zanshang/zhifubao.jpg")} /></td>
                                </tr>
                                <tr>
                                    <th class="channel"><img alt="" src={require("../../static/images/zanshang/w.png")} /></th>
                                    <th class="channel"><img alt="" src={require("../../static/images/zanshang/z.png")} /></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }


}