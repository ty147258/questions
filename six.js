
var mysix = require("./mysix");
var content = process.argv[2];
var txt = process.argv[3];
mysix(content,txt,function(err,data){
    if(err)
        return console.error('there was an error:',err)
    data.forEach(function(file){
        console.log(file);
    })
})