const express = require("express");
const router = express.Router();
const tracks = require("../controllers/tracks")

router.get("/", tracks.showTracks);
router.get("/:id", tracks.showTrack);
router.delete("/", tracks.deleteTracks)
router.delete("/:id", tracks.deleteTrack);
router.patch("/:id", tracks.patchTrack);
router.post("/", tracks.addTrack);
module.exports = router
