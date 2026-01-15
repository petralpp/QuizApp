import express from "express";
import quizService from "../services/quizService";

const router = express.Router();

router.get("/", async (_req, res) => {
  console.log("Backend: fetching all quizzes!");
  const quizzes = await quizService.getQuizzes();
  res.send(quizzes);
});

router.post("/", (_req, res) => {
  res.send("Saving a quiz!");
});

router.get("/:id", async (_req, res) => {
  console.log("Backend: fetching answers for quiz");
  const id = _req.params.id;
  const answers = await quizService.getAnswers(id);
  if (!answers) {
    res.status(404).send("Quiz not found");
  } else {
    res.send(answers);
  }
});

export default router;
