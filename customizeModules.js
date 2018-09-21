var path = require('path');

module.exports.index = (req, res) => {
     
    res.sendfile(path.join(__dirname, 'index.html')); // ilk parametre ile projemizin bulund. klas. ile login.html i birleştiriyor. 
    
    console.log(req.url);    
};

module.exports.computer = (req, res) => {
    
    res.sendfile(path.join(__dirname, 'computer.html'));
    
    console.log(req.url);
};