"use client";

import DsSidebar from "@workspace/design-system/components/ds-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { ChevronUpIcon, UsersIcon } from "lucide-react";
import type { CSSProperties } from "react";

export default function Page() {
  return (
    <SidebarProvider style={{ "--sidebar-width": "20rem" } as CSSProperties}>
      {/* ── Left panel: course navigation ── */}
      <DsSidebar />

      {/* ── Main area (center + right) ── */}
      <SidebarInset>
        <div className="flex h-svh">
          {/* ── Center: lesson content ── */}
          <div className="flex flex-1 flex-col overflow-y-auto">
            {/* Top bar */}
            <header className="flex items-center gap-2 border-b px-4 py-2">
              <span className="font-medium text-sm">Lesson Title</span>
            </header>

            {/* Video area placeholder */}
            <div className="flex flex-1 items-center justify-center bg-muted/30">
              <div className="text-muted-foreground text-sm">
                Video player placeholder
              </div>
            </div>

            {/* Lesson info */}
            <div className="border-t p-4">
              <p className="text-muted-foreground text-sm">
                Lesson info placeholder
              </p>
            </div>
          </div>

          {/* ── Right panel: comments / chat ── */}
          <aside className="flex w-80 flex-col border-l">
            {/* Chat header */}
            <header className="flex items-center gap-2 border-b px-4 py-3">
              <UsersIcon className="size-4 text-primary" />
              <span className="font-semibold text-sm">Comments</span>
              <ChevronUpIcon className="ml-auto size-4 text-primary" />
            </header>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-muted-foreground text-sm">
                Chat messages placeholder
              </p>
            </div>

            {/* Chat input */}
            <div className="border-t p-4">
              <p className="text-muted-foreground text-sm">
                Chat input placeholder
              </p>
            </div>
          </aside>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
