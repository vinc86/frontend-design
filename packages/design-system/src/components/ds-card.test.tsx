import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DsCard from "./ds-card.js";

describe("DsCard", () => {
  it("renders title and description", () => {
    render(<DsCard description="A short description" title="Lesson 1" />);
    expect(screen.getByText("Lesson 1")).toBeInTheDocument();
    expect(screen.getByText("A short description")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(<DsCard>Card body</DsCard>);
    expect(screen.getByText("Card body")).toBeInTheDocument();
  });

  it("renders footer when provided", () => {
    render(<DsCard footer={<button type="button">Action</button>} title="T" />);
    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  });

  it("renders without title or description", () => {
    render(<DsCard>Just content</DsCard>);
    expect(screen.getByText("Just content")).toBeInTheDocument();
  });
});
