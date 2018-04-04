var requireOption = require('../common').requireOption;

/**
 * Get all skills to list them
 * Put it on res.tpl.skills
 */
module.exports = function (objectrepository) {

    var skillModel = requireOption(objectrepository, 'skillModel');

    return function (req, res, next) {
        console.log("getSkills");
        res.tpl.skills = [
            {
                id: 1,
                name: 'Java',
                description: 'Java language skill'
            },
            {
                id: 2,
                name: 'Node',
                description: 'Node language skill'
            },
            {
                id: 3,
                name: 'PHP',
                description: 'PHP language skill'
            },
        ];
        return next();
    };
};