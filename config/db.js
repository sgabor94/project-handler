var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projecthandler');

module.exports = mongoose;