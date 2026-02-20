import DsBadge from "@workspace/design-system/components/ds-badge";
import DsButton from "@workspace/design-system/components/ds-button";
import DsCard from "@workspace/design-system/components/ds-card";
import DsProgress from "@workspace/design-system/components/ds-progress";
import { SidebarInset } from "@workspace/ui/components/sidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Markdown from "react-markdown";
import {
  getAllLessons,
  getCourseProgress,
  getLessonById,
  getModuleByLessonId,
} from "@/app/utils";
import ChatAside from "@/components/chat-aside";
import CourseHeader from "@/components/course-header";
import CourseNav from "@/components/course-nav";

interface LessonPageProps {
  params: Promise<{ lessonId: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = await params;

  const activeLesson = getLessonById(lessonId);
  if (!activeLesson) {
    notFound();
  }

  const t = await getTranslations();
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

              <div className="flex justify-between px-10 py-2">
                <div className="flex items-center justify-between">
                  <nav className="flex items-center gap-1 text-muted-foreground text-sm">
                    <span>{t("nav.courseTitle")}</span>
                    <ChevronRightIcon className="size-3" />
                    <span>
                      {activeModule
                        ? t(`modules.${activeModule.id}.title`)
                        : ""}
                    </span>
                    <ChevronRightIcon className="size-3" />
                    <span className="font-medium text-foreground">
                      {t(
                        `modules.${activeModule?.id}.lessons.${activeLesson.id}.title`
                      )}
                    </span>
                  </nav>
                </div>
                <DsProgress
                  label={t("lesson.courseProgress")}
                  showPercentage
                  value={getCourseProgress()}
                />
              </div>
              <div className="flex-1 space-y-6 px-10 py-6">
                <DsBadge status={activeLesson.status}>
                  {t(`status.${activeLesson.status}`)}
                </DsBadge>
                <DsCard
                  title={t(
                    `modules.${activeModule?.id}.lessons.${activeLesson.id}.title`
                  )}
                >
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
                      <Markdown>
                        {t.has(
                          `modules.${activeModule?.id}.lessons.${activeLesson.id}.content`
                        )
                          ? t(
                              `modules.${activeModule?.id}.lessons.${activeLesson.id}.content`
                            )
                          : activeLesson.content}
                      </Markdown>
                    </article>
                  )}
                </DsCard>
              </div>

              <footer className="flex items-center justify-between border-t px-10 py-4">
                {prevDisabled ? (
                  <DsButton disabled>
                    <ChevronLeftIcon className="size-4" />
                    {t("lesson.previous")}
                  </DsButton>
                ) : (
                  <DsButton asChild>
                    <Link href={`/lessons/${prevLesson.id}`}>
                      <ChevronLeftIcon className="size-4" />
                      {t("lesson.previous")}
                    </Link>
                  </DsButton>
                )}

                {nextDisabled ? (
                  <DsButton disabled>
                    {t("lesson.next")}
                    <ChevronRightIcon className="size-4" />
                  </DsButton>
                ) : (
                  <DsButton asChild>
                    <Link href={`/lessons/${nextLesson.id}`}>
                      {t("lesson.next")}
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
