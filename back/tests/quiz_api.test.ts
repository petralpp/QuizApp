import request from "supertest";
import app from "../src/app";
import mongoose from "mongoose";

describe("Quiz router", () => {
  it("GET /api/quiz should successfully return a list of quizzes", async () => {
    const response = await request(app).get("/api/quiz");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
  it("GET /api/quiz/answers/:id should return the answers to the Friends quizz", async () => {
    const response = await request(app).get(
      "/api/quiz/answers/6968bfec4f5c5db0923a700e"
    );
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      _id: "6968bfec4f5c5db0923a700e",
      quizName: "Friends",
      answers: expect.any(Array)
    });
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
