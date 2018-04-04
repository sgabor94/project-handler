var requireOption = require('../common').requireOption;

/**
 * Add new skill
 */
module.exports = function (objectrepository) {

    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {
        console.log("createSkill");
        return next();
    };
};