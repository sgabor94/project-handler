var requireOption = require('../common').requireOption;

/**
 * Delete a developer by id
 */
module.exports = function (objectrepository) {

    var developerModel = requireOption(objectrepository, 'developerModel');

    return function (req, res, next) {
        console.log("deleteDeveloper");
        return next();
    };
};