var express = require('express');
var app = express();
app.listen(8080);

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send('Hello GET World');
});

app.post('/set', function(req, res) {
  console.log(req.body);
  res.send('Hello POST World');
});

var my_test = require('./backend/test.js');
app.get('/test', function(req, res) {
  res.send(my_test.testFunc());
});
