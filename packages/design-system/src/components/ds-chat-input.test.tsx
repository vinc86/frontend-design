import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DsChatInput from "./ds-chat-input.js";

describe("DsChatInput", () => {
  it("renders textarea with default placeholder", () => {
    render(<DsChatInput />);
    expect(screen.getByPlaceholderText("Leave a comment…")).toBeInTheDocument();
  });

  it("renders custom placeholder", () => {
    render(<DsChatInput placeholder="Ask a question…" />);
    expect(screen.getByPlaceholderText("Ask a question…")).toBeInTheDocument();
  });

  it("renders submit button with default label", () => {
    render(<DsChatInput />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("disables submit button when textarea is empty", () => {
    render(<DsChatInput />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  it("enables submit button when textarea has text", () => {
    render(<DsChatInput />);
    fireEvent.change(screen.getByPlaceholderText("Leave a comment…"), {
      target: { value: "Hello" },
    });
    expect(screen.getByRole("button", { name: "Submit" })).toBeEnabled();
  });

  it("calls onSubmit with trimmed value and clears textarea", () => {
    const onSubmit = vi.fn();
    render(<DsChatInput onSubmit={onSubmit} />);
    const textarea = screen.getByPlaceholderText("Leave a comment…");

    fireEvent.change(textarea, { target: { value: "  Hello world  " } });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(onSubmit).toHaveBeenCalledWith("Hello world");
    expect(textarea).toHaveValue("");
  });

  it("disables both textarea and button when disabled", () => {
    render(<DsChatInput disabled />);
    expect(screen.getByPlaceholderText("Leave a comment…")).toBeDisabled();
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });
});
