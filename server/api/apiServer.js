/**
 * api请求server
 *
 * 0：成功
 * 1：数据不合法
 * 2：客户端数据错误
 * 3：后端错误
 */


const Express=require('express');
const bodyParser=require('body-parser');
const config=require('../../config');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const app = new Express();
var RedisStore = require('connect-redis')(session);
const port = config.apiPort;

const options={
    host:config.redis.host,
    port:config.redis.port,
    db:config.redis.db
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    store: new RedisStore(options),
    secret: 'pmp',
    resave: false,
    proxy:"true",
    cookie: {maxAge: 60 * 1000 * 30}//过期时间
}));

app.use(function (req, res, next) {
    if (!req.session) {
      return next(new Error('oh no session-redis is invalid')) // handle error
    }
    next(); // otherwise continue
})



app.use('/api/user', require('./user'));
app.use('/api/validcode', require('./validcode'));

app.listen(port, function (err) {
    if (err) {
        console.error('err:', err);
    } else {
        console.info(`===> api server is running at at ${config.apiHost}:${config.apiPort}`)
    }
});

