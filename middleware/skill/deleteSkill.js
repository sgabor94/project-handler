var requireOption = require('../common').requireOption;

/**
 * Delete a skill
 */
module.exports = function (objectrepository) {

    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {
        console.log("deleteSkill");
        return next();
    };
};