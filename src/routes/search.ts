import { classifySentence } from "../utils/functions";
import { searchValidation } from "./../utils/validations";
import { Router } from "express";
const router = Router();

router.get("/classify", (req, res) => {
  const { sentence } = req.body;
  const errors = searchValidation(sentence);
  if (errors.length > 0) {
    return res.status(400).json(errors);
  }
  try {
    const word = classifySentence(sentence);
    res.json({ type: word });
  } catch (e) {
    res.status(500).json({ error: "Server is down!" });
  }
});

export default router
