var requireOption = require('../common').requireOption;

/**
 * Add or update new project based on object repository content
 * - if res.tpl.project is not exist then add
 * - else update
 * Redirect to /projects
 */
module.exports = function (objectrepository) {

    var projectModel = requireOption(objectrepository, 'projectModel');

    return function (req, res, next) {
        console.log("saveProject");
        return next();
    };
};