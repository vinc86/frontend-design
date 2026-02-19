"use client";

import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { ChevronUpIcon, UsersIcon } from "lucide-react";
import { type CSSProperties, useState } from "react";
import CourseNav from "@/components/course-nav";
import LessonPanel from "@/components/lesson-panel";
import type { Lesson } from "@/lib/mock-data";

export default function Page() {
  const [activeLesson, setActiveLesson] = useState<Lesson | undefined>(
    undefined
  );

  return (
    <SidebarProvider style={{ "--sidebar-width": "17rem" } as CSSProperties}>
      {/* ── Left panel: course navigation ── */}
      <CourseNav activeLesson={activeLesson} onLessonSelect={setActiveLesson} />

      {/* ── Main area (center + right) ── */}
      <SidebarInset>
        <div className="flex h-svh flex-col">
          {/* ── Center: lesson content ── */}
          <div className="flex h-full">
            <LessonPanel
              activeLesson={activeLesson}
              onLessonSelect={setActiveLesson}
            />

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
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
