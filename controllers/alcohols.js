const Alcohol = require('../models/alcohol')

module.exports = {
    new: newAlcohol,
    create,
    deleteAlcohol,
}

function newAlcohol(req, res){
    Alcohol.find({})
    .then((alcohols)=>{
        res.render('alcohols/new', {title: 'Add Alcohol', alcohols, user:req.user})
    })
}  

function create(req, res){
    Alcohol.create(req.body)
    .then(()=>{
        res.redirect('/alcohols/new')
    })
}

function deleteAlcohol(req, res){
    Alcohol.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect('/alcohols/new')
    })
}