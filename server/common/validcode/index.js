var svgCaptcha = require('svg-captcha');

exports.getCode=(req,res)=>{
        var codeConfig = {
            size: 5,// 验证码长度
            ignoreChars: '0o1i', // 验证码字符中排除 0o1i
            noise: 5// 干扰线条的数量
        }
        var captcha = svgCaptcha.create(codeConfig);
        req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
        res.setHeader('Content-Type', 'image/svg+xml');
        return String(captcha.data);
        
}
