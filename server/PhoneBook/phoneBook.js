const mongoose = require("mongoose")
const Schema = mongoose.Schema

let phoneBookSchema = new Schema({
   name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20
   },
   num: {
      type: Number,
      required: true,
      min: 0
   }
}, {versionKey: false})

module.exports = mongoose.model("PhoneBook", phoneBookSchema)