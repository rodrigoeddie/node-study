var http = require('http');
var fs   = require('fs');

http.get('http://loripsum.net/api/1', function(res) {
    var text = '';

    res.on('data', function (data) {
        text += data;
    });

    res.on('end', function (data) {
        fs.writeFile('lorem.html', text, function() {
            console.log('arquivo criado!');
        });
    });
})
