var Schema = require('mongoose').Schema;
var db = require('../config/db');

var projectModel =  db.model('Project', {
    name: String,
    manday: Number,
    dueDate: Date,
    _reqSkills: {
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    },
    developers: {
        type: Schema.Types.ObjectId,
        ref: 'Developer'
    }
});

module.exports = projectModel;

