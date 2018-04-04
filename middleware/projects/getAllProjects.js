var requireOption = require('../common').requireOption;

/**
 * Get all projects to list them
 * Put it on res.tpl.projects
 */
module.exports = function (objectrepository) {

    var projectModel = requireOption(objectrepository, 'projectModel');

    return function (req, res, next) {
        console.log("getAllProjects");
        res.tpl.projects = [
            {
                id: 1,
                name: 'Project1',
                manday: 10,
                dueDate: '2018.10.10',
                reqSkills: 'Java, Spring',
                developers: [
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
                ]
            },
            {
                id: 2,
                name: 'Project2',
                manday: 5,
                dueDate: '2018.10.05',
                reqSkills: 'Node, Html',
                developers: [
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
                ]
            }
        ];
        return next();
    };
};