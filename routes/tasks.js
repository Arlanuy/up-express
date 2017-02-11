var express = require('express');
var router = express.Router();

router.get('/tasks', function(req, res, next){
    res.send('This is the task page.');
});

module.exports = router;