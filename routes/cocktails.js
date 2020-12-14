const router = require('express').Router()
const cocktailsCtrl = require('../controllers/cocktails')

router.get('/new', isLoggedIn, cocktailsCtrl.new)
router.post('/random', isLoggedIn, cocktailsCtrl.drinkQuery)
router.post('/index', isLoggedIn, cocktailsCtrl.create)
router.get('/index', isLoggedIn,cocktailsCtrl.index)
router.get('/:id', isLoggedIn, cocktailsCtrl.show)
router.delete('/:id', isLoggedIn, cocktailsCtrl.delete)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}
module.exports = router