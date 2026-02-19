import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DsChatBubble from "./ds-chat-bubble.js";

describe("DsChatBubble", () => {
  it("renders message content", () => {
    render(<DsChatBubble>Hello world</DsChatBubble>);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("renders timestamp when provided", () => {
    render(<DsChatBubble timestamp="10:30 AM">Hi</DsChatBubble>);
    expect(screen.getByText("10:30 AM")).toBeInTheDocument();
  });

  it("does not render timestamp when not provided", () => {
    const { container } = render(<DsChatBubble>Hi</DsChatBubble>);
    const timestamps = container.querySelectorAll(".text-xs");
    expect(timestamps).toHaveLength(0);
  });

  it("renders bot icon for assistant sender", () => {
    const { container } = render(
      <DsChatBubble sender="assistant">Hi</DsChatBubble>
    );
    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("renders avatar fallback for user role", () => {
    render(
      <DsChatBubble avatarFallback="VM" sender="user">
        Hi
      </DsChatBubble>
    );
    expect(screen.getByText("VM")).toBeInTheDocument();
  });
});
