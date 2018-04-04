module.exports = function (app) {
    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');
    var checkProjectDataMW = require('../middleware/projects/checkProjectData');
    var saveProjectMW = require('../middleware/projects/saveProject');
    var getAllProjectsMW = require('../middleware/projects/getAllProjects');
    var getProjectMW = require('../middleware/projects/getProject');
    var deleteProjectMW = require('../middleware/projects/deleteProject');
    var addReqSkillToProjectMW = require('../middleware/projects/addReqSkillToProject');
    var addDevToProjectMW = require('../middleware/projects/addDevToProject');
    var getDeveloperOnProjectMW = require('../middleware/projects/getDevelopersOnProject');
    var deleteDevFromProjectMW = require('../middleware/projects/deleteDevFromProject');
    var decrementMandayMW = require('../middleware/projects/decrementManday');

    var objRep = {
        projectModel: {},
        skillModel: {},
        developerModel: {}
    };

    /**
     * Show project add page
     */
    app.get('/projects/add',
        authMW(objRep),
        getAllProjectsMW(objRep),
        renderMW(objRep, 'projects')
    );

    /**
     * Add new project
     */
    app.post('/projects/add',
        authMW(objRep),
        checkProjectDataMW(objRep),
        getAllProjectsMW(objRep),
        saveProjectMW(objRep)
    );

    /**
     * Delete project by id and redirect to projects list
     */
    app.get('/projects/:id/delete',
        authMW(objRep),
        getProjectMW(objRep),
        deleteProjectMW(objRep),
        getAllProjectsMW(objRep),
        function (req, res, next) {
            return res.redirect('/projects');
        }
    );

    /**
     * Show project edit page
     */
    app.get('/projects/:id/edit/',
        authMW(objRep),
        getProjectMW(objRep),
        getAllProjectsMW(objRep),
        renderMW(objRep, 'projects')
    );

    /**
     * Edit a project
     */
    app.post('/projects/:id/edit',
        authMW(objRep),
        getProjectMW(objRep),
        checkProjectDataMW(objRep),
        saveProjectMW(objRep),
        getAllProjectsMW(objRep),
        renderMW(objRep, 'projects')
    );

    /**
     * Show skill add to project page
     */
    app.get('/addreqskilltoproject/:id',
        authMW(objRep),
        getProjectMW(objRep),
        addReqSkillToProjectMW(objRep),
        renderMW(objRep, 'projects')
    );

    /**
     * Show add developer(s) to a project page
     */
    app.get('/adddevtoproject/:id',
        authMW(objRep),
        getDeveloperOnProjectMW(objRep),
        getAllProjectsMW(objRep),
        renderMW(objRep, 'addprojectdev')
    );

    /**
     * Add developer(s) to a project
     */
    app.post('/adddevtoproject/:id',
        authMW(objRep),
        getDeveloperOnProjectMW(objRep),
        addDevToProjectMW(objRep),
        saveProjectMW(objRep),
        getAllProjectsMW(objRep),
        renderMW(objRep, 'addprojectdev')
    );

    /**
     * Delete developer from project
     */
    app.get('/adddevtoproject/:id/delete/:devid',
        authMW(objRep),
        getDeveloperOnProjectMW(objRep),
        deleteDevFromProjectMW(objRep),
        function (req, res, next) {
            return res.redirect('/adddevtoproject/:id');
        }
    );

    /**
     * List all projects
     */
    app.get('/projects/:id/decrementmanday',
        authMW(objRep),
        getProjectMW(objRep),
        decrementMandayMW(objRep),
        function (req, res, next) {
            return res.redirect('/projects');
        }
    );

    /**
     * List all projects
     */
    app.get('/projects',
        authMW(objRep),
        getAllProjectsMW(objRep),
        renderMW(objRep, 'projects')
    );
};