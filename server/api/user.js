const Express=require('express');
const router = Express.Router();



router.get('/cc',function (req,res) {

    //读取cookie
    console.log('取得的cookie:'+req.cookies.userid)

    //req.session.user;
    //req.query.namexxx

    res.send("success"); 
});


/**
 * 1.0 用户登录业务整合 
 **/
router.post('/login',function(req,res){
    var username=req.body.username;
    var pwd=req.body.pwd;
    var imgcode=req.body.imgcode;
    var captcha=req.session.captcha;
    var result="0";

    /**
     * 调用其他API获取登录信息
     * */
    ///校验验证码
    console.log(captcha);
    if(imgcode!==captcha || imgcode==null || captcha==null){
        res.send({"result":"invalid imgcode","code":"002"}); 
        return;
    }
    
    if(username==='admin' && pwd==='e10adc3949ba59abbe56e057f20f883e'){
        result="1";
        //设置cookie 一小时过期
        res.cookie('userid', username, { expires: new Date(Date.now() + 360000 * 10 ), httpOnly: true });
        req.session.user={
            username:username
        };
        res.send(result); 
    }else{
        res.send({"result":"invalid username or pwd","code":"003"}); 
        return;
    }

});


/**
 * 2.0 用户退出业务整合 
 **/
router.post('/logout',function(req,res){
    req.session.user=null;
    res.send("1"); 
});

/**
 * 3.0 查询用户是否存在业务整合 
 **/
router.post('/read',function(req,res){
    if(req.session.user==null){
        res.send("0"); 
    }else{
        res.send(req.session.user); 
    }
});




module.exports = router;