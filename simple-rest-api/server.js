var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('Simple Node JS RESTful API server started on: ' + port);