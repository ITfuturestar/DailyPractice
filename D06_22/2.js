//导包
let express = require("express");
let mysql = require("mysql");
//将框架挂载在变量上面
let service = express();
//指定端口号
service.listen(3030);
//连数据库
let db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"database"
});
service.get("/sele",function (request,response) {
    db.query("select * from user",function (err,data) {
        response.send({data});
        //response.send({mag:data});
        response.end();
    })
});
//设置静态文件
service.use(express.static("qq"));