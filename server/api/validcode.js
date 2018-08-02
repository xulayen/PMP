const Express=require('express');
const router = Express.Router();

const vald=require('../common/validcode');


/**
 * 1.0 获取验证码
 * * */
router.get('/getcode',function (req,res) {
    var codeData=vald.getCode(req,res);
    res.send(codeData);
});




module.exports = router;