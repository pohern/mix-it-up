const User = require('../models/user')
const Cocktail = require('../models/cocktail')

module.exports = {
    showProfile,

}

function showProfile(req, res) {
    User.findById(req.user._id)
    .then((user) => {
      res.render("users/profile", {title: "Profile Page", user})
    })
  }