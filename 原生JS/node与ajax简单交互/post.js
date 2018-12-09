var http = require("http");
var querystring = require("querystring");
http.createServer(function (request,response) {
    response.setHeader("Access-Control-Allow-Origin","*");
    var str="";
    request.on("data",function (data) {
        str+=data;
    });
    request.on("end",function () {
        var json=querystring.parse(str);
        console.log(json);
        if (json.username=="jax"&&json.pass==="12345"){
            response.write("success");
        } else{
            response.write("failed")
        }
        response.end();
    })
}).listen(9217);