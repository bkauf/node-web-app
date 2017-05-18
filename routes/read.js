var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET file contents. */
router.post('/', function(req, res, next) {

  var file_name = req.param('file_name');
  var file = file_name.split("#");
//file_name = "test.txt";
/*  fs.readFile(file[1], 'utf8', function(err, data) {
      if (err) throw err;
      res.send(data);
  });
  */

  res.send(file_name);
});
module.exports = router;
