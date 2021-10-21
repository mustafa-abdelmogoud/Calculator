import { render, screen } from "@testing-library/react";

import App from "../../App";

it("renders 4 operand buttons (/, *, -, +)", () => {
  render(<App />);

  const division = screen.getByText("/");
  expect(division).toBeInTheDocument();

  const Multiplication = screen.getByText("*");
  expect(Multiplication).toBeInTheDocument();

  const Subtraction = screen.getByText("-");
  expect(Subtraction).toBeInTheDocument();

  const Addition = screen.getByText("-");
  expect(Addition).toBeInTheDocument();
});

it("renders space around operand", () => {
  render(<App />);

  const two = screen.getByText("2");
  const subtraction = screen.getByText("-");

  two.click();
  subtraction.click();
  two.click();

  const screenComponent = screen.getByTestId("screen");
  expect(screenComponent).toHaveTextContent("2 - 2");
});

it("allows user to delete digits", () => {
  render(<App />);

  const two = screen.getByText("2");
  const subtraction = screen.getByText("-");
  const delButton = screen.getByText("Del");

  two.click();
  subtraction.click();
  two.click();
  subtraction.click();
  delButton.click();

  const screenComponent = screen.getByTestId("screen");
  expect(screenComponent).toHaveTextContent("2 - 2");

  two.click();
  two.click();
  delButton.click();
  expect(screenComponent).toHaveTextContent("2 - 22");
});
