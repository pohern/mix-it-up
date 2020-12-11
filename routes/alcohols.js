const router = require('express').Router()
const alcoholsCtrl = require('../controllers/alcohols')

router.get('/new', isLoggedIn, alcoholsCtrl.new)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router