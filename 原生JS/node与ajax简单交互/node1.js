var http = require("http");
http.createServer(function (request,response) {
    response.setHeader('Access-Control-Allow-Origin','*'); //允许谁的请求，跨域问题
    var url=request.url;
    if (url.indexOf("html")!=-1){
        console.log(url);
        if (url=="/index.html"){
            response.write("this is index.html");
        }else{
            response.write("404")
        }
    }

    response.write("hello");
    response.end();
}).listen(9217);