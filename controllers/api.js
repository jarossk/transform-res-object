var express = require('express');
var router = express.Router();

router.get('/api1', function(req, res) {
    res.json({
        error_code: 0,
        message: 'Api1 called!'
    });
});

router.get('/api2', function (req, res) {
    res.json({
        error_code: 0,
        message: 'Api2 called!'
    });
});

module.exports = router;