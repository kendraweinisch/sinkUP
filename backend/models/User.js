// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
<<<<<<< HEAD
    // unique: { index: { unique: true } }
=======
    unique: {
      index: {
        unique: true
      }
    }
>>>>>>> d8f11a9349628815bf88d8ca2fb23ac4320f0ee9
  },
  email: {
    type: String,
    required: true,
<<<<<<< HEAD
    // unique: { index: { unique: true } }
=======
    unique: {
      index: {
        unique: true,
      }
    }
>>>>>>> d8f11a9349628815bf88d8ca2fb23ac4320f0ee9
  },
  photo: {
    type: String,
    required: true,
<<<<<<< HEAD
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
=======
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
>>>>>>> d8f11a9349628815bf88d8ca2fb23ac4320f0ee9
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;