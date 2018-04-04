var requireOption = require('../common').requireOption;

/**
 * Check if all prjects datas are valid
 * If for example due date is not valid set tpl.error
 */
module.exports = function (objectrepository) {

    var projectModel = requireOption(objectrepository, 'projectModel');

    return function (req, res, next) {
        console.log("checkProjectData");
        return next();
    };
};