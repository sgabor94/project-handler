var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/projecthandler');

var Project = mongoose.model('Project', {
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

module.exports = Project;
