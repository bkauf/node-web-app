'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {

	var os = require("os");
   var hostname = os.hostname();
  res.send('<div style="width:100%><div style="width:300px;margin-left:auto; margin-right:auto;">Hello9 from host:<h1 style="color:yellow;background:black">'+hostname+'</h1></div></div>');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
