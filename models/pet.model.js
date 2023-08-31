const mongoose = require("mongoose");

const options = {
  timestamps: true
}

const petSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Name required"]},
  age: {type: Number},
  type: {type: String},
  breed: {type: String}
}, options);


const Pet = mongoose.model("Pets", petSchema);

module.exports = Pet
