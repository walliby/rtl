import { render, screen, fireEvent } from "@testing-library/react";
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

  it("displays username when username is entered and form is submitted", () => {
    render(<App />);
    const username = "Joshua";
    const inputField = screen.getByLabelText(/username/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    const displayText = `Your username is: ${username}`;

    expect(
      screen.queryByRole("heading", { level: 2, name: displayText })
    ).toBeNull();

    fireEvent.change(inputField, { target: { value: "Joshua" } });
    fireEvent.click(submitButton);

    expect(
      screen.getByRole("heading", { level: 2, name: displayText })
    ).toBeInTheDocument();
  });

  it("clears name when clear button is pressed", () => {
    const username = "Bob";
    render(<App initialName={username} />);

    const displayText = `Your username is: ${username}`;
    expect(
      screen.getByRole("heading", { level: 2, name: displayText })
    ).toBeInTheDocument();

    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);

    expect(
      screen.queryByRole("heading", { level: 2, name: displayText })
    ).toBeNull();
  });
});
