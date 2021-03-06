const router = require('express').Router()
const alcoholsCtrl = require('../controllers/alcohols')

router.post('/', isLoggedIn, alcoholsCtrl.create)
router.get('/new', isLoggedIn, alcoholsCtrl.new)
router.delete('/:id', isLoggedIn, alcoholsCtrl.deleteAlcohol)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router