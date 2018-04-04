var requireOption = require('../common').requireOption;

/**
 * Decrement required manday from a project
 */
module.exports = function (objectrepository) {

    var projectModel = requireOption(objectrepository, 'projectModel');

    return function (req, res, next) {
        console.log("decrementManday");
        return next();
    };
};