/**项目需要的配置  */
module.exports = {
    host:process.env.HOST || '127.0.0.1',
    port:process.env.PORT ||(process.env.NODE_ENV === 'production'?8080:8011),
    apiHost:process.env.APIHOST || '127.0.0.1',
    apiPort:process.env.APIPORT || '8686',
    redis:{
        host:'10.20.31.11',
        port:'6379',
        db:10
    }
};