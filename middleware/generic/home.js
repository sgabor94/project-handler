/**
 * Show home page
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("homePage")
        return next();
    };

};