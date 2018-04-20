var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/projecthandler');

var Skill = mongoose.model('Skill', {
    name: String,
    description: String

});

module.exports = Skill;
