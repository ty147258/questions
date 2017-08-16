(function() {
    var fs = require('fs');
    var callback = function(err, contents) {
        var str='';
        if (contents !== undefined) {
            str += contents;
        }
        var lines = str.split('\n').length;
        console.log(lines);
    };
    fs.readFile(process.argv[1], 'utf8', callback);
})();