const Drink = require('../../models/drink')

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteDrink,
}

function index(req, res){
    Drink.find({})
    .then((drinks) =>{
        res.status(200).json(drinks)
    })
}
function show(req, res){
    Drink.findById(req.params.id)
    .then((drink)=>{
        res.status(200).json(drink)
    })
}
function create(req, res){
    Drink.create(req.body)
    .then((drink) =>{
        res.status(201).json(drink)
    })
}
function update(req, res){
    Drink.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((drink) => {
        res.status(200).json(drink)
    })
}
function deleteDrink(req, res){
    Drink.findByIdAndDelete(req.params.id)
    .then((drink) => {
        res.status(200).json(drink)
    })
}
