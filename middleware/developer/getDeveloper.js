var requireOption = require('../common').requireOption;

/**
 * Get developer by id
 * - if no corresponding developer found, redirect to /developers
 * - else put it on res.tpl.developer
 */
module.exports = function (objectrepository) {

    var developerModel = requireOption(objectrepository, 'developerModel');

    return function (req, res, next) {
        console.log("getDeveloper");
        return next();
    };
};