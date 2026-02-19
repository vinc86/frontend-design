"use client";

import DsBadge from "@workspace/design-system/components/ds-badge";
import DsCard from "@workspace/design-system/components/ds-card";
import DsProgress from "@workspace/design-system/components/ds-progress";
import { PlayCircleIcon } from "lucide-react";
import { course, getCourseProgress, type Lesson } from "@/lib/mock-data";
import CourseHeader from "./course-header";

interface LessonPanelProps {
  activeLesson?: Lesson;
}

export default function LessonPanel({ activeLesson }: LessonPanelProps) {
  const activeModule = course.modules.find((m) =>
    m.lessons.some((l) => l.id === activeLesson?.id)
  );

  if (!activeLesson) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <PlayCircleIcon className="size-12" />
          <span className="text-sm">Select a lesson to start</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col overflow-y-auto px-10">
      {/* Top Header */}
      <CourseHeader />
      {/* Top bar */}
      <header className="flex items-center gap-2 px-4 py-2">
        <span className="font-medium text-2xl">{activeLesson.title}</span>
        <DsBadge status={activeLesson.status}>{activeLesson.status}</DsBadge>
      </header>

      {/* Video / content area */}
      {activeLesson.type === "video" && activeLesson.content && (
        <div className="relative aspect-video w-full bg-black">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            src={activeLesson.content}
            title={activeLesson.title}
          />
        </div>
      )}

      {/* Lesson info card + progress */}
      <div className="space-y-4 p-4">
        <DsCard description={activeModule?.title} title={activeLesson.title}>
          <p className="text-muted-foreground text-sm">
            {activeLesson.content && activeLesson.type !== "video"
              ? activeLesson.content
              : `This is a ${activeLesson.type} lesson.`}
          </p>
        </DsCard>
        <DsProgress
          label="Course progress"
          showPercentage
          value={getCourseProgress()}
        />
      </div>
    </div>
  );
}
