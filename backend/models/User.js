// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
const userSchema = new Schema({
  // headline, a string, must be entered
  userName: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // summary, a string, must be entered
  age: {
    type: Number,
    required: true
  },
  // url, a string, must be entered
  gender: {
    type: String,
    required: true
  },
  // date is just a string
  genderSought: {
    type: String,
    required: true
  },
  quizScore: {
    type: Number,
    required: true
  }
});

// Create the Headline model using the headlineSchema
const User = mongoose.model("User", userSchema);

// Export the Headline model
module.exports = User;
