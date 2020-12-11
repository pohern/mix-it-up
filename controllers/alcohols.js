const Alcohol = require('../models/alcohol')

module.exports = {
    new: newAlcohol,

}
function newAlcohol(req, res){
    res.render("alcohols/new", {
        title: "New Alcohol",
        user: req.user,
        results: null
      })
}