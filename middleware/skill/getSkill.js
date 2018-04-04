var requireOption = require('../common').requireOption;

/**
 * Get skill by id
 * - if no corresponding developer found, redirect to /skills
 * - else put it on res.tpl.skill
 */
module.exports = function (objectrepository) {

    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {
        console.log("getSkill");
        res.tpl.skill =
            {
                id: 1,
                name: 'Java',
                description: "Java language skill"
            };
        console.log('typeof skill: ' + typeof skill);
        return next();
    };
};