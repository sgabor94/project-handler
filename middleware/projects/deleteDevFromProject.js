var requireOption = require('../common').requireOption;

/**
 * Delete a developer by id from one project
 */
module.exports = function (objectrepository) {

    var developerModel = requireOption(objectrepository, 'developerModel');
    var projectModel = requireOption(objectrepository, 'projectModel');

    return function (req, res, next) {
        console.log("deleteDevFromProject");
        return next();
    };
};