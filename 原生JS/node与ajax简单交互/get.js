var http = require("http");
var urlList=require("url");
http.createServer(function (request,response) {
    response.setHeader('Access-Control-Allow-Origin','*'); //允许谁的请求，跨域问题
    var url=request.url;
    var json=urlList.parse(url,true).query; //转成json
    /*var url2=ue=jax&pasrl.substring(2);//usernams=12345
    var arr=url2.split("&");//[username=jax,pass=12345]
    var json={};
   for (var i=0;i<arr.length;i++){
       json[arr[i].split("=")[0]]=arr[i].split("=")[1]
   }*/
    console.log(json);
   if(json.username=="jax"&&json.pass=="12345"){
       response.write("success")
   }else {
       response.write("failed")
   }
    response.end();
}).listen(9217);