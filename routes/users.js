const router = require('express').Router()
const usersCtrl = require('../controllers/users')

router.get("/profile", isLoggedIn, usersCtrl.showProfile);
router.get("/index", isLoggedIn, usersCtrl.index);
router.put('/profile', isLoggedIn, usersCtrl.update)
router.get('/:id', isLoggedIn, usersCtrl.show)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router