var requireOption = require('../common').requireOption;

/**
 * Add or update new developer based on object repository content
 * - if res.tpl.developer is not exist then add
 * - else update
 * Redirect to /developers
 */
module.exports = function (objectrepository) {

    var developerModel = requireOption(objectrepository, 'developerModel');

    return function (req, res, next) {
        console.log("saveDeveloper");
        return next();
    };
};