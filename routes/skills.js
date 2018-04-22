module.exports = function (app) {
    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');
    var createSkillMW = require('../middleware/skill/createSkill');
    var getSkillMW = require('../middleware/skill/getSkill');
    var getAllSkillsMW = require('../middleware/skill/getAllSkills');
    var deleteSkillMW = require('../middleware/skill/deleteSkill');

    var skillModel = require('../models/skill');

    var objRep = {
        skillModel: skillModel
    };

    /**
     * Show skill add page
     */
    app.get('/skills/add',
        authMW(objRep),
        createSkillMW(objRep),
        getAllSkillsMW(objRep),
        renderMW(objRep, 'skills')
    );

    /**
     * Add new skill
     */
    app.post('/skills/add',
        authMW(objRep),
        createSkillMW(objRep),
        getAllSkillsMW(objRep),
        renderMW(objRep, 'skills')
    );


    /**
     * Delete skill
     */
    app.get('/skills/delete/:id',
        authMW(objRep),
        getSkillMW(objRep),
        deleteSkillMW(objRep),
        function (req, res, next) {
            return res.redirect('/skills');
        }
    );

    /**
     * List all skills
     */
    app.get('/skills',
        authMW(objRep),
        getAllSkillsMW(objRep),
        renderMW(objRep, 'skills')
    );
};