import { render, screen } from "@testing-library/react";

import App from "../../App";

it("renders error message", () => {
  render(<App />);

  const zero = screen.getByText("0");
  const multiplication = screen.getByText("*");
  const equal = screen.getByText("=");

  zero.click();
  multiplication.click();
  equal.click();

  const error = screen.getByText("Invalid expression");
  expect(error).toBeInTheDocument;
});
