var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/projecthandler');

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
