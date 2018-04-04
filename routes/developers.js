module.exports = function (app) {
    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');
    var checkDeveloperDataMW = require('../middleware/developer/checkDeveloperData');
    var saveDeveloperMW = require('../middleware/developer/saveDeveloper');
    var getDeveloperMW = require('../middleware/developer/getDeveloper');
    var getAllDevelopersMW = require('../middleware/developer/getAllDevelopers');
    var deleteDeveloperMW = require('../middleware/developer/deleteDeveloper');
    var addSkillToDevMW = require('../middleware/developer/addSkillToDev');

    var objRep = {
        developerModel: {},
        skillModel: {}
    };

    /**
     * Show developer add page
     */
    app.get('/developers/add',
        authMW(objRep),
        getAllDevelopersMW(objRep),
        renderMW(objRep, 'developers')
    );

    /**
     * Add new developer
     */
    app.post('/developers/add',
        authMW(objRep),
        checkDeveloperDataMW(objRep),
        saveDeveloperMW(objRep)
    );

    /**
     * Delete developer by id and redirect to developers list
     */
    app.get('/developers/:id/delete',
        authMW(objRep),
        getDeveloperMW(objRep),
        deleteDeveloperMW(objRep),
        function (req, res, next) {
            return res.redirect('/developers');
        }
    );

    /**
     * Show developer edit page
     */
    app.get('/developers/:id/edit/',
        authMW(objRep),
        getDeveloperMW(objRep),
        getAllDevelopersMW(objRep),
        renderMW(objRep, 'developers')
    );

    /**
     * Edit a developer
     */
    app.post('/developers/:id/edit',
        authMW(objRep),
        getDeveloperMW(objRep),
        checkDeveloperDataMW(objRep),
        saveDeveloperMW(objRep),
        getAllDevelopersMW(objRep),
        renderMW(objRep, 'developers')
    );

    /**
     * Show skill add to developer page
     */
    app.get('/addskilltodev/:id',
        authMW(objRep),
        getDeveloperMW(objRep),
        renderMW(objRep, 'adddevskill')
    );

    /**
     * Add skill(s) to a developer
     */
    app.post('/addskilltodev/:id',
        authMW(objRep),
        getDeveloperMW(objRep),
        addSkillToDevMW(objRep),
        saveDeveloperMW(objRep),
        renderMW(objRep, 'adddevskill')
    );

    /**
     * List all developers
     */
    app.get('/developers',
        authMW(objRep),
        getAllDevelopersMW(objRep),
        renderMW(objRep, 'developers')
    );
};