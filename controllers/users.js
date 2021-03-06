const User = require('../models/user')
const Cocktail = require('../models/cocktail')

module.exports = {
    showProfile,
    index,
    update,
    show,

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
function update(req, res) {
    User.findByIdAndUpdate(req.user._id, req.body, {new: true})
    .then(() => {
      res.redirect("/users/profile")
    })
}

function show(req, res) {
User.findById(req.params.id)
.then((userInfo) => {
    res.render("users/show", {
        title: "User Details",
        userInfo,
        user: req.user,
    })
    })
}
