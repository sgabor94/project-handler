var requireOption = require('../common').requireOption;

/**
 * Check if all developer datas are valid
 * If either name, email is not valid set tpl.error
 */
module.exports = function (objectrepository) {

    var developerModel = requireOption(objectrepository, 'developerModel');

    return function (req, res, next) {
        console.log("checkDeveloperData");
        return next();
    };
};