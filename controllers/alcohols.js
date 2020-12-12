const Alcohol = require('../models/alcohol')

module.exports = {
    create,
    new: newAlcohol,
    deleteAlcohol,
}

function newAlcohol(req, res){
    Alcohol.find({})
    .then((alcohols)=>{
        console.log('Heyyyy')
        res.render('alcohols/new', {title: 'Add Alcohol', alcohols, user:req.user})
    })
}  

function create(req, res){
    Alcohol.create(req.body)
    .then((alcohol)=>{
        console.log(alcohol)
        res.redirect('/alcohols/new')
    })
}

function deleteAlcohol(req, res){
    Alcohol.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/alcohols/new')
    })
}