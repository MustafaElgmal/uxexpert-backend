import { Category } from "./../entities/category";
import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({
      relations: { components: { codes: true } },
    });
    res.json({ categories });
  } catch (e) {
    res.status(500).json({ error: "Server is down!" });
  }
});

export default router;
