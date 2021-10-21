import { render, screen } from "@testing-library/react";
import App from "../../App";

it("extends the result with new calculation", () => {
  render(<App />);

  const two = screen.getByText("2");
  const addition = screen.getByText("+");
  const one = screen.getByText("1");
  const multiplication = screen.getByText("*");
  const equal = screen.getByText("=");

  two.click();
  addition.click();
  one.click();
  equal.click();

  const screenComponent = screen.getByTestId("screen");
  expect(screenComponent).toHaveTextContent("3");

  multiplication.click();
  two.click();
  equal.click();

  expect(screenComponent).toHaveTextContent("6");
});
