import DsButton from "@workspace/design-system/components/ds-button";
import DsProgress from "@workspace/design-system/components/ds-progress";
import { SidebarInset } from "@workspace/ui/components/sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import ChatAside from "@/components/chat-aside";
import CourseHeader from "@/components/course-header";
import CourseNav from "@/components/course-nav";
import {
  course,
  getAllLessons,
  getCourseProgress,
  getLessonById,
  getModuleByLessonId,
} from "@/lib/mock-data";

interface LessonPageProps {
  params: Promise<{ lessonId: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = await params;

  const activeLesson = getLessonById(lessonId);
  if (!activeLesson) {
    notFound();
  }

  const activeModule = getModuleByLessonId(lessonId);
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((l) => l.id === activeLesson.id);
  const prevLesson =
    currentIndex > 0 ? allLessons[currentIndex - 1] : undefined;
  const nextLesson =
    currentIndex >= 0 && currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : undefined;

  const prevDisabled = !prevLesson || prevLesson.status === "locked";
  const nextDisabled = !nextLesson || nextLesson.status === "locked";

  return (
    <>
      <CourseNav activeLessonId={lessonId} />
      <SidebarInset>
        <div className="flex h-svh flex-col">
          <div className="flex h-full">
            <div className="flex flex-1 flex-col overflow-y-auto">
              <CourseHeader />

              <div className="flex justify-between border-b px-10 py-2">
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

                <DsProgress
                  label="Course progress"
                  showPercentage
                  value={getCourseProgress()}
                />
              </div>

              <div className="flex-1 space-y-6 px-10 py-6">
                <h1 className="font-semibold text-2xl">{activeLesson.title}</h1>

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

                {activeLesson.content && activeLesson.type !== "video" && (
                  <article className="prose prose-sm dark:prose-invert max-w-none">
                    <Markdown>{activeLesson.content}</Markdown>
                  </article>
                )}
              </div>

              <footer className="flex items-center justify-between border-t px-10 py-4">
                {prevDisabled ? (
                  <DsButton disabled>
                    <ChevronLeftIcon className="size-4" />
                    Previous
                  </DsButton>
                ) : (
                  <DsButton asChild>
                    <Link href={`/lessons/${prevLesson.id}`}>
                      <ChevronLeftIcon className="size-4" />
                      Previous
                    </Link>
                  </DsButton>
                )}

                {nextDisabled ? (
                  <DsButton disabled>
                    Next
                    <ChevronRightIcon className="size-4" />
                  </DsButton>
                ) : (
                  <DsButton asChild>
                    <Link href={`/lessons/${nextLesson.id}`}>
                      Next
                      <ChevronRightIcon className="size-4" />
                    </Link>
                  </DsButton>
                )}
              </footer>
            </div>

            <ChatAside />
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
