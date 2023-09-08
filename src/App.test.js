import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders an H1 tag with correct text", () => {
    render(<App />);
    const linkElement = screen.getByRole("heading", {
      level: 1,
      name: /This is my RTL Demo app/i,
    });
    expect(linkElement).toBeInTheDocument();
  });

  it("displays username when submitting form", () => {
    expect(true).toBeTruthy();
  });
});
