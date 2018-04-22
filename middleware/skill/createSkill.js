var requireOption = require('../common').requireOption;

/**
 * Add new skill
 */
module.exports = function (objectrepository) {

    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {
        console.log("createSkill");
        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.description === 'undefined')) {
            return next();
        }

        var skill = undefined;
        if (typeof res.tpl.skill !== 'undefined') {
            skill = res.tpl.skill;
        } else {
            skill = new skillModel();
        }
        skill.name = req.body.name;
        skill.description = req.body.description;

        skill.save(function (err, result) {
            console.log('save skill called');
            if (err) {
                return next(err);
            }

            return res.redirect('/skills/');
        });
    };
};