const Cocktail  = require('../models/cocktail')

module.exports = {
    createIngredient,
}

function createIngredient(req, res){
    Cocktail.findById(req.params.id)
    .then((cocktail) => {
        cocktail.ingredients.push(req.body)
        cocktail.save()
        .then(()=>{
            res.redirect(`/cocktails/${cocktail._id}`)
        })
    })
}