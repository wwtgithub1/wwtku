//1.创建koa对象
/*const Koa = require('koa')

const app = new Koa
// 2.编写响应函数（中间件）
   //ctx:上下文，web容器，ctx.request ctx.response
   //next:下一个中间件，下一层中间件是否能够得到执行，取决于next这个函数有没有被调用 next调用得到是一个Promise对象
app.use((ctx,next) => {
    console.log('第一层中间件');
    ctx.response.body = 'hello world';
    next();
})
app.use((ctx,next) => {
    console.log('第二层中间件');
    next();
})

app.use((ctx,next) => {
    console.log('第三层中间件');
    next();
})*/

/*app.use(async (ctx,next) => {
    //刚进入中间件想做的事情
    await next()
    //内测中间件结束之后想做的事情
})*/

// 3.绑定端口号 3001
/*app.listen(3001)*/

// 服务器的入口文件
// 1.创建KOA的实例对象
const Koa = require('koa')
const app = new Koa()
// 2.绑定中间件
// 绑定第一层中间件
const respDurationMiddleware =  require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
// 绑定第二层中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)
// 绑定第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
// 3.绑定端口号 8888
app.listen(8888)
