module.exports = function (app) {
    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');
    var homeMW = require('../middleware/generic/home');

    var objRep = {};

    /**
     * Show login page
     */
    app.get('/login',
        authMW(objRep),
        homeMW(objRep),
        renderMW(objRep, 'login')
    );

    /**
     * Show home page
     */
    app.get('/home',
        authMW(objRep),
        homeMW(objRep),
        renderMW(objRep, 'index')
    );

    /**
     * Show home page
     */
    app.get('/',
        authMW(objRep),
        homeMW(objRep),
        renderMW(objRep, 'index')
    );
};