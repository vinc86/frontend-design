import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DsDialog from "./ds-dialog.js";

describe("DsDialog", () => {
  it("renders the trigger", () => {
    render(
      <DsDialog
        title="Test Dialog"
        trigger={<button type="button">Open</button>}
      />
    );
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("opens and displays title and description", () => {
    render(
      <DsDialog
        description="My Description"
        title="My Title"
        trigger={<button type="button">Open</button>}
      />
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByText("My Description")).toBeInTheDocument();
  });

  it("renders default footer with confirm and cancel buttons", () => {
    render(
      <DsDialog
        cancelLabel="Dismiss"
        confirmLabel="Save"
        title="Dialog"
        trigger={<button type="button">Open</button>}
      />
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Dismiss")).toBeInTheDocument();
  });

  it("calls onConfirm when confirm button is clicked", () => {
    const onConfirm = vi.fn();
    render(
      <DsDialog
        onConfirm={onConfirm}
        title="Dialog"
        trigger={<button type="button">Open</button>}
      />
    );
    fireEvent.click(screen.getByText("Open"));
    fireEvent.click(screen.getByText("Confirm"));
    expect(onConfirm).toHaveBeenCalledOnce();
  });

  it("renders children content", () => {
    render(
      <DsDialog title="Dialog" trigger={<button type="button">Open</button>}>
        <p>Custom body content</p>
      </DsDialog>
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Custom body content")).toBeInTheDocument();
  });

  it("renders custom footer when provided", () => {
    render(
      <DsDialog
        footer={<button type="button">Custom Action</button>}
        title="Dialog"
        trigger={<button type="button">Open</button>}
      />
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Custom Action")).toBeInTheDocument();
  });
});
