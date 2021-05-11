import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders navigation", () => {
  render(<App />);
  const nav = screen.getByRole("navigation");
  expect(nav).toBeInTheDocument();
});

test("renders heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
