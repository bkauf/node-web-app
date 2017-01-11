'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {

	var os = require("os");
   var hostname = os.hostname();
  res.send('Hello999 from host:<h1 style="color:yellow;background:black">'+hostname+'</h1>');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
