const router = require('express').Router()
const cocktailsCtrl = require('../controllers/cocktails')

router.get('/new', isLoggedIn, cocktailsCtrl.new)
router.post('/random', isLoggedIn, cocktailsCtrl.drinkQuery)
router.post('/', isLoggedIn, cocktailsCtrl.create)
router.delete('/:id', isLoggedIn, cocktailsCtrl.delete)
router.put('/:id', isLoggedIn, cocktailsCtrl.update)
router.get('/', isLoggedIn,cocktailsCtrl.index)
router.get('/:id', isLoggedIn, cocktailsCtrl.show)
router.post('/:id/alcohols', isLoggedIn, cocktailsCtrl.addToAlcohols);




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}
module.exports = router