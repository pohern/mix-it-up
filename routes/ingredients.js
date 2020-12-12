const router = require('express').Router()
const ingredientsCtrl = require('../controllers/ingredients')

router.post('/cocktails/:id/ingredients', isLoggedIn, ingredientsCtrl.createIngredient)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router