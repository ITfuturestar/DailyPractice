let express = require("express");

let service = express();

service.listen(3030);

service.all("/secret",function (request,response,next) {
    response.send('GET request to the secret section');
    console.log('Accessing the secret section ...');
    next();
},function (request,response) {
    response.send('Hello from B!');
});
service.use(express.static("qq"));