import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DsProgress from "./ds-progress.js";

describe("DsProgress", () => {
  it("renders label text", () => {
    render(<DsProgress label="Course progress" value={50} />);
    expect(screen.getByText("Course progress")).toBeInTheDocument();
  });

  it("shows percentage when enabled", () => {
    render(<DsProgress showPercentage value={75} />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("hides percentage by default", () => {
    render(<DsProgress value={75} />);
    expect(screen.queryByText("75%")).not.toBeInTheDocument();
  });

  it("renders progress bar", () => {
    const { container } = render(<DsProgress value={50} />);
    expect(
      container.querySelector("[data-slot='progress']")
    ).toBeInTheDocument();
  });
});
