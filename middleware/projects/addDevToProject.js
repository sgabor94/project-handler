var requireOption = require('../common').requireOption;

/**
 * Add developer(s) to a project
 */
module.exports = function (objectrepository) {

    var projectModel = requireOption(objectrepository, 'projectModel');
    var skillModel = requireOption(objectrepository, 'skillModel');
    var developerModel = requireOption(objectrepository, 'developerModel');

    return function (req, res, next) {
        console.log("addDevToProject");
        return next();
    };
};