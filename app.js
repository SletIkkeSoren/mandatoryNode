const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = __dirname + '/wwwroot/';

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(path + 'about.html');
});

//app.listen(3000);
app.listen(process.env.PORT || 3009);