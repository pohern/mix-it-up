const Cocktail = require('../models/cocktail')
const Alcohol = require('../models/alcohol')

module.exports = {
    new:newCocktail,

}

function newCocktail(req, res){
    res.render("cocktails/new", {
        title: "New Cocktail",
        user: req.user,
        results: null
      })
}