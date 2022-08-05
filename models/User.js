const mongoose = require("mongoose");
// const Schema = mongoose.Schema (Object destruturing below)
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model("users", userSchema);
