var express = require('express');
var app = express();
var winston = require('winston');

app.use(require('./controllers/api'));

app.listen('3000', function() {
    console.log('listening on port 3000');
});
