var express = require('express');
var app = express();

var logincontrol=require('../models/login');

app.post('/login',logincontrol.loginuser);

module.exports=app;