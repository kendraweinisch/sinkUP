// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: { index: { unique: true } }
  },
  email: {
    type: String,
    required: true,
    // unique: { index: { unique: true } }
  },
  photo: {
    type: String,
    required: true,
    // unique: { index: { unique: true } }
  },
  genderCombo: {
    type: String,
    required: false
  },
  quizScore: {
    type: Number,
    required: false
  },
  googleId: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;