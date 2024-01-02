var express = require('express');
var app = express();
app.listen(8080);

app.get('/', function(req, res) {
    res.send('Hello GET World');
});

app.post('/set', function(req, res) {
    res.send('Hello POST World');
});
