var requireOption = require('../common').requireOption;

/**
 * Get all skills to list them
 * Put it on res.tpl.skills
 */
module.exports = function (objectrepository) {

    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {
        console.log("getAllSkills");
        skillModel.find(function (err, results) {
            if (!err) {
                res.tpl.skills = results;
            } else {
                console.log(err);
            }
            return next();
        });
    };
};