var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET file contents. */
router.post('/', function(req, res, next) {


  res.send('test');


});
module.exports = router;
