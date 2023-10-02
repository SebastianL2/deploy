const { Schema, model } = require("mongoose")

const gallerySchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  images: [{type: String, required: true}]
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model("Gallery", gallerySchema)