var http=require("http");
var fs=require("fs");
http.createServer(function (req,res) {
    fs.readFile("./ajax-get.html",function (err,data) {
        if (err){
            console.log(err);

        } else{
            console.log("读取成功");
            res.write(data);
            res.end();
        }
    });
}).listen(3948);
