var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Developer = mongoose.model('Developer', {
    firstname: String,
    lastname: String,
    email: String,
    level: String,
    _skills: {
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    }
});

module.exports = Developer;
