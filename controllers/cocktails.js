const Cocktail = require('../models/cocktail')
const Alcohol = require('../models/alcohol')

module.exports = {
    new:newCocktail,
    create,
    index,
    show,
    delete: deleteCocktail,


}

function newCocktail(req, res){
    Alcohol.find({})
    .populate('alcohols')
    .then((alcohols, cocktail)=>{
        res.render("cocktails/new", {
            title: "New Cocktail",
            user: req.user,
            results: null,
            alcohols,
            cocktail
          })
    })
}

function create(req, res){
    const cocktail = new Cocktail(req.body)
    cocktail.save()
    .populate('alcohols')
    .populate('mixologist')
    .then(()=>{
        res.redirect(`/cocktails/${cocktail._id}`)
    })
}

function index(req, res){
    Cocktail.find({})
    .then((cocktails)=>{
        res.render('cocktails/index', {title: 'All Cocktails', user: req.user, cocktails})
    })
}

function show(req, res){
    Cocktail.findById(req.params.id)
    .populate('mixologist')
    .populate('alcohols')
    .then((cocktail)=>{
        Alcohol.find({_id: {$nin: cocktail.alcohols}})
        .then((alcohols)=>{
            res.render('cocktails/show', {title: 'Cocktail Details', user: req.user, cocktail, alcohols})
        })
    })
}

function deleteCocktail(req, res){
    Cocktail.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/cocktails/index')
    })
}
