import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Result from "../components/Result";
import testData from "./test_utils";

describe("Result component", () => {
  beforeEach(() => {
    render(
      <Result
        playerAnswers={testData.testPlayerAnswers}
        rightAnswers={testData.testCorrectAnswers}
      />
    );
  });
  it("displays the correct numeral result", () => {
    const resultText = screen.getByText("Your result: 2 / 3", { exact: false });
    expect(resultText).toBeInTheDocument();
    const showButton = screen.getByRole("button", { name: "Show answers" });
    expect(showButton).toBeInTheDocument();
  });
  it("displays the correct buttons", async () => {
    const showButton = screen.getByRole("button", { name: "Show answers" });
    expect(showButton).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(showButton);

    const hideButton = screen.getByRole("button", { name: "Hide" });
    expect(hideButton).toBeInTheDocument();
  });
  it("doesn't render the ResultTable component before a button click", () => {
    const tableCell = screen.queryByText("Question");
    expect(tableCell).not.toBeInTheDocument();
  });
  it("displays the ResultTable component after a button click", async () => {
    const showButton = screen.getByRole("button", { name: "Show answers" });

    const user = userEvent.setup();
    await user.click(showButton);

    const tableCell = screen.getByText("Question");
    expect(tableCell).toBeInTheDocument();
  });
});
