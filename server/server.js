

const path=require('path');
const Express=require('express');
const httpProxy=require('http-proxy');
const compression=require('compression');
const connectHistoryApiFallback=require('connect-history-api-fallback');
const config=require('../config');
const app = new Express();
const port = config.port;
/**
 * 设置代理服务器 有后台代理需要解除注释
 */
// app.use(function(req,res,next){
//     if(req.path.indexOf('api')>-1 && req.path.indexOf('js') < 0 && req.path.indexOf('css') < 0){
//         console.log("req:"+req.path);  
//         proxy.web(req,res);
//         return;
//     }
//     next();
// });

app.use('/', connectHistoryApiFallback());
app.use('/',Express.static(path.join(__dirname,"..",'build')));

/**
 * 有后台代理需要解除注释
 */
// const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
// const proxy = httpProxy.createProxyServer({
//     target:targetUrl
// });

app.use(compression());

app.listen(port,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log(`===>open http://${config.host}:${config.port} in a browser to view the app`);
    }
});