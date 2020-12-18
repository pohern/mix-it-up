const Cocktail = require('../models/cocktail')
const Alcohol = require('../models/alcohol')
const Axios = require('axios')

module.exports = {
    new:newCocktail,
    create,
    index,
    show,
    delete: deleteCocktail,
    drinkQuery,
    addToAlcohols,
    update,
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
    req.body.mixologist = req.user._id
    Cocktail.create(req.body)
    .then((cocktail)=>{
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
        res.redirect('/cocktails')
    })
}

function drinkQuery(req, res){
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
        res.render('cocktails/random', {title: 'Random Cocktail', user: req.user, cocktail: response.data})
    })
}

function addToAlcohols(req, res){
    Cocktail.findById(req.params.id)
    .then((cocktail)=>{
        console.log(req.body.alcohols.name)
        cocktail.alcohols.push(req.body.alcohols)
        cocktail.save()
        .then(()=>{
            res.redirect(`/cocktails/${cocktail._id}`)
        })
    })
}
function update(req, res){
    Cocktail.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(() => {
        res.redirect('/cocktails')
    })

}