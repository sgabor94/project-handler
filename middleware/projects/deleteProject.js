var requireOption = require('../common').requireOption;

/**
 * Delete a project by id
 */
module.exports = function (objectrepository) {

    var projectModel = requireOption(objectrepository, 'projectModel');

    return function (req, res, next) {
        console.log("deleteProject");
        return next();
    };
};