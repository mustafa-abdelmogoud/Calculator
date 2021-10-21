import { render, screen } from "@testing-library/react";

import App from "../../App";

it("renders screen component", () => {
  render(<App />);

  const screenComponent = screen.getByTestId("screen");
  expect(screenComponent).toBeInTheDocument();
});
