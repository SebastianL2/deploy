const galleryCrtl = {};

const Gallery = require("../models/gallery");

galleryCrtl.getGalleries = async (req, res) => {
  const data = await Gallery.find({});
  res.json(data);
};

galleryCrtl.createGallery = async (req, res) => {
  try {
    const newGallery = new Gallery(req.body);
    await newGallery.save();
    res.json({ message: "Gallery created" });
  } catch (error) {
    res.json({ message: error });
  }
};

galleryCrtl.updateGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Gallery updated" });
  } catch (error) {
    res.json({ message: error });
  }
};

galleryCrtl.deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndRemove(req.params.id);
    res.json({ message: "Gallery deleted" });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = galleryCrtl;
