import DsBadge from "@workspace/design-system/components/ds-badge";
import DsSidebar from "@workspace/design-system/components/ds-sidebar";
import DsTreeItem from "@workspace/design-system/components/ds-tree-item";
import { FileTextIcon, PackageIcon, PlayCircleIcon } from "lucide-react";
import logo from "@/assets/epicode-logo.png";
import { course } from "@/lib/mock-data";

interface CourseNavProps {
  activeLessonId?: string;
}

const lessonIcon = {
  video: <PlayCircleIcon className="size-3.5" />,
  article: <FileTextIcon className="size-3.5" />,
  quiz: <FileTextIcon className="size-3.5" />,
};

export default function CourseNav({ activeLessonId }: CourseNavProps) {
  return (
    <DsSidebar collapsible="icon" header={course.title} logo={logo.src}>
      {course.modules.map((mod, i) => {
        const hasActive = mod.lessons.some((l) => l.id === activeLessonId);
        return (
          <DsTreeItem
            defaultOpen={hasActive}
            icon={<PackageIcon className="size-4" />}
            key={mod.id}
            label={`${i + 1}. ${mod.title}`}
          >
            {mod.lessons.map((lesson) => (
              <div
                className="flex w-full items-center justify-between"
                key={lesson.id}
              >
                <DsTreeItem
                  disabled={lesson.status === "locked"}
                  href={`/lessons/${lesson.id}`}
                  icon={lessonIcon[lesson.type]}
                  isActive={lesson.id === activeLessonId}
                  label={lesson.title}
                />
                <DsBadge status={lesson.status}>{lesson.status}</DsBadge>
              </div>
            ))}
          </DsTreeItem>
        );
      })}
    </DsSidebar>
  );
}
