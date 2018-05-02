var express = require('express');
var router = express.Router();
var os = require("os");
var hostname = os.hostname();
var fs = require('fs');
var files = [];

/* test */ 
/* GET home page. */
router.get('/', function(req, res, next) {

    const path = '/run/secrets';
  //const path = '.';
  var files = [];

    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(file => {
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
