var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET file contents. */
router.post('/', function(req, res, next) {

  const path    = '/run/secrets/';
  var file_name = req.param('file_name');
  var file      = file_name.split("#");

      fs.readFile(path+file, 'utf8', function(err, data) {
          if (err) throw err;
          res.send(data);
      });

});
module.exports = router;
