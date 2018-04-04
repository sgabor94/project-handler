var requireOption = require('../common').requireOption;

/**
 * Get all developers to list them
 * Put it on res.tpl.developers
 */
module.exports = function (objectrepository) {

    var developerModel = requireOption(objectrepository, 'developerModel');

    return function (req, res, next) {
        console.log("getDevelopers");
        res.tpl.developers = [
            {
                id: 1,
                firstname: 'Aaa',
                lastname: 'Aaa',
                email: 'email@email1',
                level: 'Junior',
                skill:
                    {
                        id: 1,
                        name: 'Java',
                        description: 'Java language skill'
                    }
            },
            {
                id: 2,
                firstname: 'Bbb',
                lastname: 'Bbb',
                email: 'email@email2',
                level: 'Senior',
                skill:
                    {
                        id: 3,
                        name: 'PHP',
                        description: 'PHP language skill'
                    }
            }
        ];
        return next();
    };
};