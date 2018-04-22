var requireOption = require('../common').requireOption;

/**
 * Get skill by id
 * - if no corresponding developer found, redirect to /skills
 * - else put it on res.tpl.skill
 */
module.exports = function (objectrepository) {

    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {

        skillModel.findOne({
            _id: req.params.id
        }, function (err, result) {
            if ((err) || (!result)) {
                return req.redirect('/skills');
            }

            res.tpl.skill = result;
            return next();
        });
    };
};