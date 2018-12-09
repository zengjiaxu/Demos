const  express= require('express');
const  server=express();
server.use('/book',(req,res)=>{
    console.log(req.query);
});
server.listen(2183);
server.use(express.static('./'));