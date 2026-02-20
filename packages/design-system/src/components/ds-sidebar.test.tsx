import { fireEvent, render, screen } from "@testing-library/react";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { describe, expect, it } from "vitest";
import DsSidebar from "./ds-sidebar.js";
import DsTreeItem from "./ds-tree-item.js";

describe("DsSidebar", () => {
  it("renders header text", () => {
    render(
      <SidebarProvider>
        <DsSidebar header="LMS Platform" />
      </SidebarProvider>
    );
    expect(screen.getByText("LMS Platform")).toBeInTheDocument();
  });

  it("renders logo when provided", () => {
    render(
      <SidebarProvider>
        <DsSidebar header="EPICODE" logo="/logo.png" />
      </SidebarProvider>
    );
    expect(screen.getByAltText("EPICODE")).toBeInTheDocument();
  });

  it("renders children tree items", () => {
    render(
      <SidebarProvider>
        <DsSidebar header="LMS">
          <DsTreeItem label="Module 1" />
          <DsTreeItem label="Module 2" />
        </DsSidebar>
      </SidebarProvider>
    );
    expect(screen.getByText("Module 1")).toBeInTheDocument();
    expect(screen.getByText("Module 2")).toBeInTheDocument();
  });

  it("expands tree item children on click", () => {
    render(
      <SidebarProvider>
        <DsSidebar header="LMS">
          <DsTreeItem label="Module 1">
            <DsTreeItem label="Lesson 1" />
          </DsTreeItem>
        </DsSidebar>
      </SidebarProvider>
    );

    // Lesson hidden by default
    expect(screen.queryByText("Lesson 1")).not.toBeInTheDocument();

    // Click module to expand
    fireEvent.click(screen.getByText("Module 1"));
    expect(screen.getByText("Lesson 1")).toBeInTheDocument();
  });

  it("renders toggle button", () => {
    render(
      <SidebarProvider>
        <DsSidebar collapsible="icon" header="LMS" />
      </SidebarProvider>
    );
    // The toggle button is inside the sidebar provider
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });
});
