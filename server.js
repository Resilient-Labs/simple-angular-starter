/**
 * Created by muigai on 2/23/17.
 */
var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./public/app.js")(app);

var port = 3000;

app.listen(port);