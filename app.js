var http = require('http');
var file = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var ctrlElectronic = require('./customizeModules');

app.use('/public', express.static(path.join(__dirname, 'public'))); // kullanıcıya erişim izni verdiğimiz dosyalar. (css vs.)

app.get('/home', ctrlElectronic.index);  
app.get('/computer', ctrlElectronic.computer);

app.listen(8000);