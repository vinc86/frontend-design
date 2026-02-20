import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DsButton from "./ds-button.js";

describe("DsButton", () => {
  it("renders without crashing", () => {
    render(<DsButton>Click</DsButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders expected text", () => {
    render(<DsButton>Epicode</DsButton>);
    expect(screen.getByRole("button", { name: "Epicode" })).toBeInTheDocument();
  });

  it("responds to click events", () => {
    const handleClick = vi.fn();
    render(<DsButton onClick={handleClick}>Click me</DsButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("disables button when loading", () => {
    render(<DsButton isLoading>Save</DsButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
