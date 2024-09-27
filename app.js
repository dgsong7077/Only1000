var express = require('express');

var app = express();
require('dotenv').config();

require('./config/ejs')(app, __dirname);
require('./config/middleware')(app, __dirname);
require('./config/mongodb')();
require('./config/router')(app);
require('./config/errorHandler')(app);

module.exports = app;
