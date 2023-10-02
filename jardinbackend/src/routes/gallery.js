const { Router } = require("express")
const router = Router()

const galleryCrtl = require("../controllers/gallery")

router.get("/", galleryCrtl.getGalleries)

router.post("/", galleryCrtl.createGallery)

router.put("/:id", galleryCrtl.updateGallery)

router.delete("/:id", galleryCrtl.deleteGallery)

module.exports = router;