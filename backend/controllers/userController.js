const db = require("../models");
const mongoose = require("mongoose");
const User = mongoose.model("User")

module.exports = {
  // Find all users, sort them, then send them back to the user
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ quizScore: 1 })
      .then(function(userdb) {
        res.json(userdb);
      });
  },
  // Delete the specified user
  delete: function(req, res) {
    db.User.remove({ _id: req.params.id }).then(function(userdb) {
      res.json(userdb);
    });
  },
  // Update the specified user
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(userdb) {
      res.json(userdb);
    });
  },
  create: function(req, res) {
    console.log("inside create function");
    const user = req.body;
    // make sure user has name, email pic, and googleID
    if (!user.name || !user.email || !user.googleId || !user.photo) {
      return res.status(400).json({error: "Please provide all requested information"})
    }
    // if all there, we need to create the new user
    const newUser = new User(user)
    console.log(newUser)
    newUser.save()
    .then(function(savedUser){
      res.json(savedUser)
    })
  }

};
