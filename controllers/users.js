const User = require('../models/user')
const Cocktail = require('../models/cocktail')

module.exports = {
    showProfile,
    index,

}

function showProfile(req, res) {
    User.findById(req.user._id)
    .then((user) => {
      res.render("users/profile", {title: "Profile Page", user})
    })
}
function index(req, res) {
    User.find({})
    .then((users) => {
      res.render("users/index",
       {title: "User Index",
        user: req.user,
        users });
    });
}