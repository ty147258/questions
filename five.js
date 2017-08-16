var fs = require("fs");
var path = require("path");
fs.readdir("pos", function(err, list){
    if(err) {
        throw err;
    }
    for(var i=0; i<list.length; i++) {
        var file = list[i];
        if (path.extname(file) == '.txt') {
            console.log(file);
        }
    }

});




