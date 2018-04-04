var requireOption = require('../common').requireOption;

/**
 * Get all developers on one project to list them
 * Put it on res.tpl.developers
 */
module.exports = function (objectrepository) {

    var developerModel = requireOption(objectrepository, 'developerModel');
    var projectModel = requireOption(objectrepository, 'projectModel');

    return function (req, res, next) {
        console.log("getDeveloperOnOneProject");
        return next();
    };
};