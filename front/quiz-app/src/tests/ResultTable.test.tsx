import { screen } from "@testing-library/react";
import ResultTable from "../components/ResultTable";
import testData from "./test_data";
import { setupStore } from "../store";
import { setPlayerAnswer, setRightAnswers } from "../reducers/answersReducer";
import { renderWithProviders } from "./test_utils";

describe("ResultTable component", () => {
  beforeEach(() => {
    const store = setupStore();
    const playerAnswers = testData.testPlayerAnswers;
    const correctAnswers = testData.testCorrectAnswers;
    store.dispatch(setRightAnswers(correctAnswers));
    for (const answer of playerAnswers) {
      store.dispatch(setPlayerAnswer(answer));
    }
    renderWithProviders(<ResultTable />, store);
  });
  it("displays the table head correctly", () => {
    const questionText = screen.getByText("Question");
    const correctAnswerText = screen.getByText("Correct answer");
    const userAnswerText = screen.getByText("Your answer");

    expect(questionText).toBeInTheDocument();
    expect(correctAnswerText).toBeInTheDocument();
    expect(userAnswerText).toBeInTheDocument();
  });
  it("displays the questions", () => {
    const questionOne = screen.getByText(testData.testQuestions[0], {
      exact: false
    });
    const questionTwo = screen.getByText(testData.testQuestions[1], {
      exact: false
    });
    const questionThree = screen.getByText(testData.testQuestions[2], {
      exact: false
    });

    expect(questionOne).toBeInTheDocument();
    expect(questionTwo).toBeInTheDocument();
    expect(questionThree).toBeInTheDocument();
  });
  it("displays both answer columns correctly", async () => {
    const correctAnswerOne = await screen.findAllByText(
      testData.testCorrectAnswers[0].answer
    );
    const correctAnswerTwo = await screen.findAllByText(
      testData.testCorrectAnswers[1].answer
    );
    const correctAnswerThree = await screen.findAllByText(
      testData.testCorrectAnswers[2].answer
    );

    expect(correctAnswerOne).toHaveLength(2);
    expect(correctAnswerTwo).toHaveLength(1);
    expect(correctAnswerThree).toHaveLength(2);
  });
});
