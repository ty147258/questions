var http = require("http");
var url = process.argv[2];
http.get(url, function(res){
    res = res.setEncoding();
    res.on("data", console.log);
    res.on("error", console.error);
}).on("error", console.error);