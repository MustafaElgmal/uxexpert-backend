import { Component } from "./../entities/component";
import { Router } from "express";
import { upload } from "../middlewares/fileUpload";
const router = Router();
const singleUpload = upload.single("image");

router.post("/uploadPhoto", (req: any, res) => {
  singleUpload(req, res, async (err) => {
    if (err) {
      return res.status(406).send({ error: err.message });
    }

    if (!req.file) {
      return res.status(404).send({ error: "No content!" });
    }

    try {
      res.status(201).json({ imageUrl: req.file.location });
    } catch (e) {
      res.status(500).json({ error: "Server is down!" });
    }
  });
});

router.get("/trending", async (req, res) => {
  try {
    const components = await Component.find({
      where: { IsTrending: true },
      relations: { codes: true },
    });
    res.json({ components });
  } catch (e) {
    res.status(500).json({ error: "Server is dwon!" });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const components = await Component.find({
      where: { category: { id: +id } },
      relations: { codes: true },
    });
    res.json({ components });
  } catch (e) {
    res.status(500).json({ error: "Server is down!" });
  }
});

export default router;
