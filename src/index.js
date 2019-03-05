'use strict';
const port = 3000;
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(port);
console.log(`Server started on port ${port}`);
