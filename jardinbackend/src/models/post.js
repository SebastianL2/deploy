const { Schema, model } = require("mongoose")

const postSchema = new Schema({
  images: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  date: {type: Date, require: true}
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model("Schema", postSchema)