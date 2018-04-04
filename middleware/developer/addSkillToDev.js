var requireOption = require('../common').requireOption;

/**
 * Add skill to developer
 */
module.exports = function (objectrepository) {

    var developerModel = requireOption(objectrepository, 'developerModel');
    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {
        console.log("addSkillToDev");
        return next();
    };
};