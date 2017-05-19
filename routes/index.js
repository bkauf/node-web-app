var express = require('express');
var router = express.Router();
var os = require("os");
var hostname = os.hostname();
var fs = require('fs');
var files = [];


/* GET home page. */
router.get('/', function(req, res, next) {

    const testFolder = '/run/secrets';
  //const testFolder = '.';
  var   files = [];

    if (fs.existsSync(testFolder)) {
      fs.readdirSync(testFolder).forEach(file => {
        var obj = {
          id: file,
          name:'#'+file
        };
        files.push(obj);
      })
    }

  res.render('index', { title: 'Node.js in Docker', container: hostname, secrets:files });
});

module.exports = router;
