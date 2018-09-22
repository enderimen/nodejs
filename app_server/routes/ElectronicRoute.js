var express = require('express');
var router = express.Router();
var controller = require('../controller/ElectronicController');

router.use((req, res, next) => {
    req.middlewareDeneme = "Merhaba Middleware!";
    next();
});

router.get('/', controller.index);
router.get('/computer', controller.computer);

module.exports = router;