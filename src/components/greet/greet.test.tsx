import { render, screen } from "@testing-library/react";

import { Greet } from "./greet";

describe("Greet With Hello", () => {
  test("Greet Component Outputs Hello Correctly", () => {
    render(<Greet />);
    const helloText = screen.getByText(/hello/i);
    expect(helloText).toBeInTheDocument();
  });
});
describe("Greet With Name", () => {
  test("Greet Component receives prop-name correctly and output correctly", () => {
    render(<Greet name="anlo" />);
    const nameText = screen.getByText("Hello anlo");
    expect(nameText).toBeInTheDocument();
  });
});
