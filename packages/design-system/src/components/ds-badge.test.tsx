import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DsBadge from "./ds-badge.js";

describe("DsBadge", () => {
  it("renders children text", () => {
    render(<DsBadge>New</DsBadge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies status variant class", () => {
    const { container } = render(<DsBadge status="completed">Done</DsBadge>);
    const badge = container.querySelector("[data-slot='badge']");
    expect(badge).toHaveClass("bg-green-500/15");
  });

  it("renders without status as default badge", () => {
    const { container } = render(<DsBadge variant="outline">Tag</DsBadge>);
    const badge = container.querySelector("[data-slot='badge']");
    expect(badge).toBeInTheDocument();
  });
});
