import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DsAvatar from "./ds-avatar.js";

describe("DsAvatar", () => {
  it("renders fallback initials", () => {
    render(<DsAvatar fallback="VM" />);
    expect(screen.getByText("VM")).toBeInTheDocument();
  });

  it("renders without crashing when src is provided", () => {
    const { container } = render(
      <DsAvatar fallback="EP" src="https://example.com/avatar.png" />
    );
    expect(container.querySelector("[data-slot='avatar']")).toBeInTheDocument();
  });

  it("does not render status badge when no status", () => {
    const { container } = render(<DsAvatar fallback="VM" />);
    expect(
      container.querySelector("[data-slot='avatar-badge']")
    ).not.toBeInTheDocument();
  });

  it("renders status badge when status is provided", () => {
    const { container } = render(<DsAvatar fallback="VM" status="online" />);
    expect(
      container.querySelector("[data-slot='avatar-badge']")
    ).toBeInTheDocument();
  });
});
