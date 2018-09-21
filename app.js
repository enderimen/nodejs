var http = require('http');
var file = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.use('/public', express.static(path.join(__dirname, 'public'))); // kullanıcıya erişim izni verdiğimiz dosyalar. (css vs.)

var indexController = (req, res) => {
     
    res.sendfile(path.join(__dirname, 'login.html')); // ilk parametre ile projemizin bulund. klas. ile login.html i birleştiriyor. 
    
    console.log(req.url);    
};

var homeController = (req, res) => {
    
    res.sendfile(path.join(__dirname, 'index.html'));
    
        console.log(req.url);
};

app.get('/', indexController);  
app.get('/home', homeController);

app.listen(8000);