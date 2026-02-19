"use client";

import DsSidebar from "@workspace/design-system/components/ds-sidebar";
import DsTreeItem from "@workspace/design-system/components/ds-tree-item";
import {
  CheckCircleIcon,
  CircleDotIcon,
  FileTextIcon,
  LockIcon,
  PackageIcon,
  PlayCircleIcon,
} from "lucide-react";
import logo from "@/assets/epicode-logo.jpeg";
import { course, type Lesson } from "@/lib/mock-data";

interface CourseNavProps {
  activeLesson?: Lesson;
  onLessonSelect?: (lesson: Lesson) => void;
}

const lessonIcon = {
  video: <PlayCircleIcon className="size-3.5" />,
  article: <FileTextIcon className="size-3.5" />,
  quiz: <FileTextIcon className="size-3.5" />,
};

const statusIcon = {
  completed: <CheckCircleIcon className="size-3.5 text-green-500" />,
  "in-progress": <CircleDotIcon className="size-3.5 text-primary" />,
  locked: <LockIcon className="size-3.5" />,
};

export default function CourseNav({
  activeLesson,
  onLessonSelect,
}: CourseNavProps) {
  return (
    <DsSidebar collapsible="icon" header={course.title} logo={logo.src}>
      {course.modules.map((mod, i) => {
        const hasActive = mod.lessons.some((l) => l.id === activeLesson?.id);
        return (
          <DsTreeItem
            defaultOpen={hasActive}
            icon={<PackageIcon className="size-4" />}
            key={mod.id}
            label={`${i + 1}. ${mod.title}`}
          >
            {mod.lessons.map((lesson) => (
              <DsTreeItem
                disabled={lesson.status === "locked"}
                icon={
                  lesson.status === "completed"
                    ? statusIcon[lesson.status]
                    : lessonIcon[lesson.type]
                }
                isActive={lesson.id === activeLesson?.id}
                key={lesson.id}
                label={lesson.title}
                onClick={() => onLessonSelect?.(lesson)}
              />
            ))}
          </DsTreeItem>
        );
      })}
    </DsSidebar>
  );
}
