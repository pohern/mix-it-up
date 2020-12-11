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
