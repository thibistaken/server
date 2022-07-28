const mongoose = require("mongoose");
// const Schema = mongoose.Schema (Object destruturing below)
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
