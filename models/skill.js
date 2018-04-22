var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Skill = mongoose.model('Skill', {
    name: String,
    description: String

});

module.exports = Skill;
