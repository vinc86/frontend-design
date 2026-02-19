"use client";

import DsBadge from "@workspace/design-system/components/ds-badge";
import DsCard from "@workspace/design-system/components/ds-card";
import DsChatBubble from "@workspace/design-system/components/ds-chat-bubble";
import DsChatInput from "@workspace/design-system/components/ds-chat-input";
import DsProgress from "@workspace/design-system/components/ds-progress";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { ChevronUpIcon, UsersIcon } from "lucide-react";
import type { CSSProperties } from "react";
import CourseNav from "@/components/course-nav";

export default function Page() {
  return (
    <SidebarProvider style={{ "--sidebar-width": "20rem" } as CSSProperties}>
      {/* ── Left panel: course navigation ── */}
      <CourseNav />

      {/* ── Main area (center + right) ── */}
      <SidebarInset>
        <div className="flex h-svh">
          {/* ── Center: lesson content ── */}
          <div className="flex flex-1 flex-col overflow-y-auto">
            {/* Top bar */}
            <header className="flex items-center gap-2 border-b px-4 py-2">
              <span className="font-medium text-sm">Flexbox & Grid</span>
              <DsBadge variant="secondary">Module 2</DsBadge>
            </header>

            {/* Video area */}
            <div className="flex aspect-video w-full items-center justify-center bg-black">
              <div className="text-muted-foreground text-sm">
                🎬 Video Player
              </div>
            </div>

            {/* Lesson info */}
            <div className="space-y-4 p-6">
              <DsCard
                description="Learn modern CSS layout techniques including Flexbox and CSS Grid to build responsive and complex layouts."
                title="Flexbox & Grid"
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Course progress</span>
                  <span className="font-medium">35%</span>
                </div>
                <DsProgress value={35} />
              </div>
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
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              <DsChatBubble sender="assistant" timestamp="09:15 AM">
                Welcome to Flexbox & Grid! Feel free to ask questions here.
              </DsChatBubble>
              <DsChatBubble
                avatarFallback="VM"
                sender="user"
                timestamp="09:20 AM"
              >
                Is it better to use Grid or Flexbox for a navigation bar?
              </DsChatBubble>
              <DsChatBubble sender="assistant" timestamp="09:21 AM">
                Great question! Flexbox is usually the better choice for navbars
                since they're one-dimensional. Grid shines for two-dimensional
                layouts.
              </DsChatBubble>
            </div>

            {/* Chat input */}
            <div className="border-t p-4">
              <DsChatInput />
            </div>
          </aside>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
