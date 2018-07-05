//引包
let express=require("express");

let service=express();

service.listen(3030);

service.get("/add",function (request,respones) {
    respones.send({data:[
            {name:"臧三",age:16},
            {name:"李四",age:"19"}
        ]});
    respones.end();
});
service.use(express.static("qq"));