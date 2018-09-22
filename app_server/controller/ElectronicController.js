var path = require('path');


module.exports.index = (req, res) => {

    console.log(req.middlewareDeneme);

    var products = ['SSD','VGA','HDMI'];
    res.render('computer', {products : products});
};

module.exports.computer = (req, res) => {
    res.sendfile(path.join(__dirname, '../../computer.html'));
};