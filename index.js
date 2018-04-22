var express = require('express');
var app = express();
// var session = require('express-session');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

/**
 * Create tpl on res object
 */
app.use(function (req, res, next) {
    res.tpl = {};
    // console.log('tpl created');
    return next();
});

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Include all routes
 */
require('./routes/developers')(app);
require('./routes/skills')(app);
require('./routes/projects')(app);
require('./routes/home')(app);

app.use(function (req, res, next) {
    res.status(500).send("This page doesn't exist!");
    return next();
});
app.use(function (err, req, res, next) {
    res.status(500).send("Something went wrong.");
    console.error(err.stack);
});

var server = app.listen(3000, function () {
    console.log("Application is running on port: 3000");
});