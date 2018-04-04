var requireOption = require('../common').requireOption;

/**
 * Get project by id
 * - if no corresponding project found, redirect to /projects
 * - else put it on res.tpl.project
 */
module.exports = function (objectrepository) {

    var projectModel = requireOption(objectrepository, 'projectModel');

    return function (req, res, next) {
        console.log("getProject");
        return next();
    };
};