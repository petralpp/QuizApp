import express from "express";
import quizzService from "../services/quizzService";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Backend: fetching all quizzes!");
  res.send(quizzService.getQuizzes());
});

router.post("/", (_req, res) => {
  res.send("Saving a quizz!");
});

router.get("/:id", (_req, res) => {
  console.log("Backend: fetching answers for quizz");
  const id = _req.params.id;
  const answers = quizzService.getAnswers(id);
  if (!answers) {
    res.status(404).send("Quizz not found");
  } else {
    res.send(answers);
  }
});

export default router;
