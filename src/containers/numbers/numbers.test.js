import { render, screen } from "@testing-library/react";

import App from "../../App";

it("renders 10 numbers buttons (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)", () => {
  render(<App />);

  const zero = screen.getByText("0");
  expect(zero).toBeInTheDocument();

  const one = screen.getByText("1");
  expect(one).toBeInTheDocument();

  const two = screen.getByText("2");
  expect(two).toBeInTheDocument();

  const three = screen.getByText("3");
  expect(three).toBeInTheDocument();

  const four = screen.getByText("4");
  expect(four).toBeInTheDocument();

  const five = screen.getByText("5");
  expect(five).toBeInTheDocument();

  const six = screen.getByText("6");
  expect(six).toBeInTheDocument();

  const seven = screen.getByText("7");
  expect(seven).toBeInTheDocument();

  const eight = screen.getByText("8");
  expect(eight).toBeInTheDocument();

  const nine = screen.getByText("9");
  expect(nine).toBeInTheDocument();
});

it("renders (Del, ., =) buttons", () => {
  render(<App />);

  const Del = screen.getByText("Del");
  expect(Del).toBeInTheDocument();

  const dot = screen.getByText(".");
  expect(dot).toBeInTheDocument();

  const equal = screen.getByText("=");
  expect(equal).toBeInTheDocument();
});

it("blocks the user from adding more than one . to the same number", () => {
  render(<App />);

  const zero = screen.getByText("0");
  const dot = screen.getByText(".");
  const one = screen.getByText("1");

  zero.click();
  dot.click();
  one.click();
  dot.click();
  dot.click();
  one.click();

  const screenComponent = screen.getByTestId("screen");
  expect(screenComponent).toHaveTextContent("0.11");
});

it("removes zeros on the left", () => {
  render(<App />);

  const zero = screen.getByText("0");
  const one = screen.getByText("1");

  zero.click();
  zero.click();
  one.click();

  const screenComponent = screen.getByTestId("screen");

  expect(screenComponent.textContent).toBe("1");
});

it("renders negative numbers at the beginning of the expression", () => {
  render(<App />);

  const two = screen.getByText("2");
  const subtraction = screen.getByText("-");

  subtraction.click();
  two.click();

  const screenComponent = screen.getByTestId("screen");
  expect(screenComponent).toHaveTextContent("-2");
});
