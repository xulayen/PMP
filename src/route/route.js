import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'

//import {  preface, about, content, goutongPlan,ganxirenJoinPlan,wentiLog,xuqiuwenjian } from '../container'

import {
    preface,
    about,
    content,
    //biangengguanliPlan
    goutongPlan,
    ganxirenJoinPlan,
    caigouguanliPlan,
    chengbenJiZhun,
    chengbenguanliPlan,
    fanweiguanliPlan,
    fanweiJiZhun,
    fengxianguanliPlan,
    ganxirenguanliPlan,
    jinduJiZhun,
    jingduguanliPlan,
    xiangmuguanliPlan,
    xuqiuguanliPlan,
    zhiliangguanliPlan,
    ziyuanguanliPlan,


    biangengLog,
    ceshiyupingguwenjian,
    chengbengusuan,
    chengbenyuche,
    chixushijiangusuan,
    fanweishuomingshu,
    fengxiandengjice,
    fengxianbaogao,
    ganxirendengjice,
    gongfangxuanzebiaozhun,
    gusuanyiju,
    huodongqingdan,
    huodongshuxing,
    jiasherizhi,
    jindushuju,
    jinduyuche,
    jingyanjiaoxundengjice,
    //jixiaoceliangjizhun,
    lichengbeiqingdan,
    RBS,
    tuanduizhangcheng,
    wentiLog,
    xiangmurili,
    xiangmuShengMingZhouqi,
    xiangmutuanduipaigongdan,
    xiangmugoutongjilu,
    xiangmujinduwangluotu,
    xuqiugenzongjuzhen,
    xuqiuwenjian,
    zhiliangceliangzhibiao,
    zhiliangkongzhiceliangjieguo,
    ziyuanfenjiejiegou,
    ziyuanrili,
    ziyuanxuqiu,
    //zhiliangbaogao,

    NotFound
} from '../container'

export default class MyRoute extends Component {

    render() {

        if (window.location.pathname === "/") {
            return <Redirect to="/pre/face" />;
        }

        return (
            <Switch>
                {/* 关于过程组 */}
                <Route path="/startup/about" component={about} />
                <Route path="/plan/about" component={about} />
                <Route path="/implement/about" component={about} />
                <Route path="/monitor/about" component={about} />
                <Route path="/end/about" component={about} />

                {/* 启动过程组 */}
                <Route path="/startup/developprojectcharter" component={content} />
                <Route path="/startup/identifyrelevant" component={content} />

                {/* 规划过程组 */}
                <Route path="/plan/makeproject" component={content} />
                <Route path="/plan/collectingdemand" component={content} />
                <Route path="/plan/definitionrange" component={content} />
                <Route path="/plan/createWBS" component={content} />
                <Route path="/plan/definitionactivity" component={content} />
                <Route path="/plan/activitysort" component={content} />
                <Route path="/plan/estimationresource" component={content} />
                <Route path="/plan/estimationtimeing" component={content} />
                <Route path="/plan/makeprogressproject" component={content} />
                <Route path="/plan/estimatedcost" component={content} />
                <Route path="/plan/makebudget" component={content} />
                <Route path="/plan/planningquality" component={content} />
                <Route path="/plan/develophumanplan" component={content} />
                <Route path="/plan/planningcommunication" component={content} />
                <Route path="/plan/lanningriskmanagement" component={content} />
                <Route path="/plan/identifyingrisk" component={content} />
                <Route path="/plan/impementdingxinganalysis" component={content} />
                <Route path="/plan/impementdinglianganalysis" component={content} />
                <Route path="/plan/planningriskresponse" component={content} />
                <Route path="/plan/planningprocurement" component={content} />
                <Route path="/plan/planningganxirenjoin" component={content} />

                {/* 执行过程组 */}
                <Route path="/implement/manageprojectkownledge" component={content} />
                <Route path="/implement/managequality" component={content} />
                <Route path="/implement/getsource" component={content} />
                <Route path="/implement/constructionteam" component={content} />
                <Route path="/implement/manageteam" component={content} />
                <Route path="/implement/managecommunicate" component={content} />
                <Route path="/implement/implementrisk" component={content} />
                <Route path="/implement/procurement" component={content} />
                <Route path="/implement/managerelevantjoin" component={content} />

                {/* 监控过程组 */}
                <Route path="/monitor/project" component={content} />
                <Route path="/monitor/changecontrol" component={content} />
                <Route path="/monitor/scopeconfirm" component={content} />
                <Route path="/monitor/controlscope" component={content} />
                <Route path="/monitor/controlprogress" component={content} />
                <Route path="/monitor/controlcost" component={content} />
                <Route path="/monitor/controlquality" component={content} />
                <Route path="/monitor/controlresource" component={content} />
                <Route path="/monitor/monicommunication" component={content} />
                <Route path="/monitor/superrisk" component={content} />
                <Route path="/monitor/controlpurchase" component={content} />
                <Route path="/monitor/superrelevjoin" component={content} />

                {/* 收尾过程组 */}
                <Route path="/end/project" component={content} />


                {/* 项目管理计划 */}
                <Route path="/chapter/project/goutongguanliPlan" component={goutongPlan} />
                <Route path="/chapter/project/ganxirenjoinplan" component={ganxirenJoinPlan} />
                <Route path="/chapter/project/caigouguanliPlan" component={caigouguanliPlan} />
                <Route path="/chapter/project/chengbenJiZhun" component={chengbenJiZhun} />
                <Route path="/chapter/project/chengbenguanliPlan" component={chengbenguanliPlan} />
                <Route path="/chapter/project/fanweiJiZhun" component={fanweiJiZhun} />
                <Route path="/chapter/project/fanweiguanliPlan" component={fanweiguanliPlan} />
                <Route path="/chapter/project/fengxianguanliPlan" component={fengxianguanliPlan} />
                <Route path="/chapter/project/ganxirenguanliPlan" component={ganxirenguanliPlan} />
                <Route path="/chapter/project/jinduJiZhun" component={jinduJiZhun} />
                <Route path="/chapter/project/jingduguanliPlan" component={jingduguanliPlan} />
                <Route path="/chapter/project/xiangmuguanliPlan" component={xiangmuguanliPlan} />
                <Route path="/chapter/project/xuqiuguanliPlan" component={xuqiuguanliPlan} />
                <Route path="/chapter/project/zhiliangguanliPlan" component={zhiliangguanliPlan} />
                <Route path="/chapter/project/ziyuanguanliPlan" component={ziyuanguanliPlan} />


                {/* 项目文件 */}
                <Route path="/chapter/projectFiles/wentiLog" component={wentiLog} />
                <Route path="/chapter/projectFiles/xuqiuLog" component={xuqiuwenjian} />
                <Route path="/chapter/projectFiles/biangengLog" component={biangengLog} />
                <Route path="/chapter/projectFiles/ceshiyupingguwenjian" component={ceshiyupingguwenjian} />
                <Route path="/chapter/projectFiles/chengbengusuan" component={chengbengusuan} />
                <Route path="/chapter/projectFiles/chengbenyuche" component={chengbenyuche} />
                <Route path="/chapter/projectFiles/chixushijiangusuan" component={chixushijiangusuan} />
                <Route path="/chapter/projectFiles/fanweishuomingshu" component={fanweishuomingshu} />
                <Route path="/chapter/projectFiles/fengxiandengjice" component={fengxiandengjice} />
                <Route path="/chapter/projectFiles/fengxianbaogao" component={fengxianbaogao} />
                <Route path="/chapter/projectFiles/ganxirendengjice" component={ganxirendengjice} />
                <Route path="/chapter/projectFiles/gongfangxuanzebiaozhun" component={gongfangxuanzebiaozhun} />
                <Route path="/chapter/projectFiles/gusuanyiju" component={gusuanyiju} />
                <Route path="/chapter/projectFiles/huodongqingdan" component={huodongqingdan} />
                <Route path="/chapter/projectFiles/huodongshuxing" component={huodongshuxing} />
                <Route path="/chapter/projectFiles/jiasherizhi" component={jiasherizhi} />
                <Route path="/chapter/projectFiles/jindushuju" component={jindushuju} />
                <Route path="/chapter/projectFiles/jinduyuche" component={jinduyuche} />
                <Route path="/chapter/projectFiles/jingyanjiaoxundengjice" component={jingyanjiaoxundengjice} />
                <Route path="/chapter/projectFiles/lichengbeiqingdan" component={lichengbeiqingdan} />
                <Route path="/chapter/projectFiles/RBS" component={RBS} />
                <Route path="/chapter/projectFiles/tuanduizhangcheng" component={tuanduizhangcheng} />
                <Route path="/chapter/projectFiles/xiangmurili" component={xiangmurili} />
                <Route path="/chapter/projectFiles/xiangmuShengMingZhouqi" component={xiangmuShengMingZhouqi} />
                <Route path="/chapter/projectFiles/xiangmutuanduipaigongdan" component={xiangmutuanduipaigongdan} />
                <Route path="/chapter/projectFiles/xiangmugoutongjilu" component={xiangmugoutongjilu} />
                <Route path="/chapter/projectFiles/xiangmujinduwangluotu" component={xiangmujinduwangluotu} />
                <Route path="/chapter/projectFiles/xuqiugenzongjuzhen" component={xuqiugenzongjuzhen} />
                <Route path="/chapter/projectFiles/zhiliangceliangzhibiao" component={zhiliangceliangzhibiao} />
                <Route path="/chapter/projectFiles/zhiliangkongzhiceliangjieguo" component={zhiliangkongzhiceliangjieguo} />
                <Route path="/chapter/projectFiles/ziyuanfenjiejiegou" component={ziyuanfenjiejiegou} />
                <Route path="/chapter/projectFiles/ziyuanrili" component={ziyuanrili} />
                <Route path="/chapter/projectFiles/ziyuanxuqiu" component={ziyuanxuqiu} />


                {/* 404 */}
                <Route path="/404" component={NotFound} />

                {/* 序言 */}
                <Route path="/pre/face" component={preface} />

                {/* 默认 */}
                <Route component={NotFound} />


            </Switch>
        )
    }

}

