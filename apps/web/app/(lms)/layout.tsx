"use client";

import { SidebarProvider } from "@workspace/ui/components/sidebar";
import type { CSSProperties, ReactNode } from "react";

export default function LmsLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider style={{ "--sidebar-width": "17rem" } as CSSProperties}>
      {children}
    </SidebarProvider>
  );
}
