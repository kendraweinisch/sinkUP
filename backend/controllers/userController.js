var db = require("../models");

module.exports = {

idparam: function(req, res, next, id) {
  db.User
  .find({_id: id})
  .then(function(user) {
    req.user = user
    next()
  })
},
getBYID: function(req, res){
  res.json(req.user)
},
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
  }
};

