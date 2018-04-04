var requireOption = require('../common').requireOption;

/**
 * Add required skill to project
 */
module.exports = function (objectrepository) {

    var projectModel = requireOption(objectrepository, 'projectModel');
    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {
        console.log("addReqSkillToProject");
        return next();
    };
};