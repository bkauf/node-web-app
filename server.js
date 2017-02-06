'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {

   var os = require("os");
   var hostname = os.hostname();
   var html     = '<div style="width:100%;"><div style="width:300px;margin-left:auto; margin-right:auto;">';
       html    += 'Hello from host: <h1 style="color:yellow;background:black">'+hostname+'</h1></div></div>'; 
   res.send(html);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
