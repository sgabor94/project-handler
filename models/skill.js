var Schema = require('mongoose').Schema;
var db = require('../config/db');

var skillModel = db.model('Skill', {
    name: String,
    description: String

});

module.exports = skillModel;