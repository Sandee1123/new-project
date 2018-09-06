var express = require('express');
var app = express();

var employeecontrol=require('../models/getdata');
var deletecontrol=require('../models/delete');
var employee=require('../models/addemployee');
var review=require('../models/addreview');
var updatectrl=require('../models/update');
//var loginctrl=require('../models/login');


app.get('/get',employeecontrol.getemployee);
app.get('/getreview',employeecontrol.getreview);
app.get('/getjoindata',employeecontrol.getjoin);
app.get('/currentemp/:empno',employeecontrol.Editbyempno);



app.post('/insertdata',employee.saveEmployee);
app.post('/insertreview',review.saveReview);



app.put('/updatedata',updatectrl.updateEmployees);
app.delete('/deletedata',deletecontrol.deleteemployee);


module.exports=app;
