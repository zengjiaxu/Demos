var express=require("express");
var server = express();
var bodyParser=require("body-parser"); //post请求到的数据转换为json
var static=require("express-static");
var cookieParser=require("cookie-parser");
server.listen(9237);
//GET
/*
server.use('',function (request,response) {
    //get => request.query  解析为JSON对象
    response.setHeader('Access-Control-Allow-Origin','*'); //允许谁的请求，跨域问题
    console.log(request.query);
    response.write("success");
    response.end();

});*/

var vip={"jax":"123456"};
server.use(bodyParser.urlencoded({}));// next()  中间件
server.use(cookieParser());
server.use('',function (request,response,next) {
    request.secret="111";
    response.cookie("username","jax",{maxAge:365*24*60*60*1000});
    response.cookie("password","123456",{maxAge:365*24*60*60*1000});

   // console.log(request.body);    // post请求的数据转换成JSON
    //response.send("a");    //response.send() 可以看出write和end的打包方法
    next();

});
server.use('/jax',function (request,response,next) {
    response.send({user:request.cookies.username,pass:request.cookies.password})
});
server.use('/login',function (request,response,next) {
    if(vip[request.query.user]==vip["jax"]){
            response.send("ok")
    }
    else{
        response.send("no ok")
    }

});
server.use(static("./www"));