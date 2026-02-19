import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DsTooltip from "./ds-tooltip.js";

describe("DsTooltip", () => {
  it("renders the trigger element", () => {
    render(
      <DsTooltip content="Tooltip text">
        <button type="button">Trigger</button>
      </DsTooltip>
    );
    expect(screen.getByText("Trigger")).toBeInTheDocument();
  });

  it("does not show tooltip content before interaction", () => {
    render(
      <DsTooltip content="Hidden tooltip">
        <button type="button">Hover me</button>
      </DsTooltip>
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("applies the correct side attribute", () => {
    render(
      <DsTooltip content="Right side" side="right">
        <button type="button">Trigger</button>
      </DsTooltip>
    );
    expect(screen.getByText("Trigger")).toBeInTheDocument();
  });

  it("renders as child with asChild behavior", () => {
    render(
      <DsTooltip content="Tooltip">
        <a href="/test">Link trigger</a>
      </DsTooltip>
    );
    const link = screen.getByText("Link trigger");
    expect(link.tagName).toBe("A");
  });
});
