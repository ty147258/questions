
var fs = require('fs');
var path = require('path');
module.exports = function(dir,txt,callback) {
    fs.readdir(dir, function (err, data) {
        if (err)
            return callback(err);
        data = data.filter(function (file) {
            return path.extname(file) === '.' + txt;
        })
        callback(null, data);
    })
}