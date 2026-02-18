import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DsInput from "./ds-input.js";

describe("DsInput", () => {
  it("renders label and input", () => {
    render(<DsInput label="Email" placeholder="you@epicode.com" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("shows helper text", () => {
    render(<DsInput helperText="Required field" label="Name" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("shows error and hides helper text", () => {
    render(
      <DsInput
        error="Invalid email"
        helperText="We won't share it"
        label="Email"
      />
    );
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
    expect(screen.queryByText("We won't share it")).not.toBeInTheDocument();
  });

  it("sets aria-invalid when error is present", () => {
    render(<DsInput error="Required" label="Field" />);
    expect(screen.getByLabelText("Field")).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });
});
