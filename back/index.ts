import express from "express";
import quizRouter from "./routes/quiz";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);

if (!MONGODB_URI) {
  throw new Error("Database URL not found");
} else {
  mongoose
    .connect(MONGODB_URI, { family: 4 })
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch((error) => {
      console.log("error connecting to MongoDB:", error);
    });
}

const PORT = process.env.PORT;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/quiz", quizRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
