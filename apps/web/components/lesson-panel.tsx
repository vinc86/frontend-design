"use client";

import DsButton from "@workspace/design-system/components/ds-button";
import DsProgress from "@workspace/design-system/components/ds-progress";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayCircleIcon,
} from "lucide-react";
import { course, getCourseProgress, type Lesson } from "@/lib/mock-data";
import CourseHeader from "./course-header";

interface LessonPanelProps {
  activeLesson?: Lesson;
  onLessonSelect?: (lesson: Lesson) => void;
}

/** Get all non-locked lessons in order */
function getAllLessons() {
  return course.modules.flatMap((m) => m.lessons);
}

export default function LessonPanel({
  activeLesson,
  onLessonSelect,
}: LessonPanelProps) {
  const activeModule = course.modules.find((m) =>
    m.lessons.some((l) => l.id === activeLesson?.id)
  );

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.id === activeLesson?.id);
  const prevLesson =
    currentIndex > 0 ? allLessons[currentIndex - 1] : undefined;
  const nextLesson =
    currentIndex >= 0 && currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : undefined;

  if (!activeLesson) {
    return (
      <div className="flex flex-1 flex-col">
        <CourseHeader />
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <PlayCircleIcon className="size-12" />
            <span className="text-sm">Select a lesson to start</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      {/* Top Header */}
      <CourseHeader />

      <div className="flex justify-between border-b px-10 py-2">
        {/* Breadcrumb + progress */}
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>{course.title}</span>
            <ChevronRightIcon className="size-3" />
            <span>{activeModule?.title}</span>
            <ChevronRightIcon className="size-3" />
            <span className="font-medium text-foreground">
              {activeLesson.title}
            </span>
          </nav>
        </div>

        {/* Progress bar */}
        <DsProgress
          label="Course progress"
          showPercentage
          value={getCourseProgress()}
        />
      </div>
      {/* Content zone */}
      <div className="flex-1 space-y-6 px-10 py-6">
        {/* Lesson title */}
        <h1 className="font-semibold text-2xl">{activeLesson.title}</h1>

        {/* Video / image placeholder */}
        {activeLesson.type === "video" && activeLesson.content && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              src={activeLesson.content}
              title={activeLesson.title}
            />
          </div>
        )}

        {/* Lesson content */}
        {activeLesson.content && activeLesson.type !== "video" && (
          <div className="text-foreground text-lg leading-relaxed">
            <p>{activeLesson.content}</p>
          </div>
        )}
      </div>

      {/* Bottom nav: Previous / Next */}
      <footer className="flex items-center justify-between border-t px-10 py-4">
        <DsButton
          disabled={!prevLesson || prevLesson.status === "locked"}
          onClick={() => prevLesson && onLessonSelect?.(prevLesson)}
        >
          <ChevronLeftIcon className="size-4" />
          Previous
        </DsButton>
        <DsButton
          disabled={!nextLesson || nextLesson.status === "locked"}
          onClick={() => nextLesson && onLessonSelect?.(nextLesson)}
        >
          Next
          <ChevronRightIcon className="size-4" />
        </DsButton>
      </footer>
    </div>
  );
}
