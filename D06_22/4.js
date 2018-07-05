let express = require("express");

let service = express();

service.listen(3030);

var cb0 = function(req,resp,next){
    console.log("CB0");
    next();
}
var cb1 = function(req,resp,next){
    console.log("CB1");
    next();
}
var cb2 = function(req,resp){
    resp.send("hello from C!");
    console.log("-------------")
}

service.post("/dd",[cb0,cb1,cb2]);

service.use(express.static("qq"));