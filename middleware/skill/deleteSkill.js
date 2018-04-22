var requireOption = require('../common').requireOption;

/**
 * Delete a skill
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log('deleteSkill');
        if (typeof res.tpl.skill === 'undefined') {
            return next();
        }

        res.tpl.skill.remove(function (err) {
            if (err) {
                return next(err);
            }

            res.redirect('/skills/');
        });
    };
};