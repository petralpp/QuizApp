import express, { Request, Response, NextFunction } from "express";
import quizService from "../services/quizService";

const router = express.Router();

router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
  console.log("Backend: fetching all quizzes!");
  try {
    const quizzes = await quizService.getQuizzes();
    res.send(quizzes);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/answers/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("Backend: fetching answers for quiz");
      const id = req.params.id;
      const answers = await quizService.getAnswers(id);
      if (!answers) {
        res.status(404).send("Quiz not found");
      } else {
        res.send(answers);
      }
    } catch (error: unknown) {
      next(error);
    }
  }
);

export default router;
