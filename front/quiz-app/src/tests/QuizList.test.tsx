import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import testUtils from "./test_utils";
import QuizList from "../components/QuizList";
import type { Mock, Procedure } from "@vitest/spy";

const testData = testUtils.getSeparatedData();
const changeQuizHandler: Mock<Procedure> = vi.fn();
const overlayHandler: Mock<Procedure> = vi.fn();

describe("QuizList component", () => {
  beforeEach(() => {
    render(
      <QuizList
        entertainmentList={testData.entertainment}
        educationList={testData.education}
        setQuiz={changeQuizHandler}
        toggleOverlay={overlayHandler}
      />
    );
  });
  it("renders child components", () => {
    screen.debug();
    expect(screen.getByText("Entertainment")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Movie Classics")).toBeInTheDocument();
    expect(screen.getByText("HTML Basics")).toBeInTheDocument();
    expect(screen.getByText("CSS Fundamentals")).toBeInTheDocument();
  });
});
