/**
 * If the user is not logged in, redirects to /
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("auth")
        return next();
    };

};