const router = require('express').Router()
const alcoholsCtrl = require('../controllers/alcohols')

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router