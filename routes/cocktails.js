const router = require('express').Router()
const cocktailsCtrl = require('../controllers/cocktails')

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}
module.exports = router