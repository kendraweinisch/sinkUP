var db = require("../models");

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
  }
};
