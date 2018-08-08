// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: {
      index: {
        unique: true
      }
    }
  },
  userEmail: {
    type: String,
    required: true,
    unique: {
      index: {
        unique: true,
      }
    }
  },
  userPhoto: {
    type: String,
    required: true,
    unique: {
      index: {
        unique: true,
      }
    }
  },
  genderCombo: {
    type: String,
    required: false,
  },
  quizScore: {
    type: Number,
    required: false,
  },
  googleID: {
    type: String,
    required: true,
    unique: {
      index: {
        unique: true,
      }
    }
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;