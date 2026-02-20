import type { Lesson, Module } from "@/lib/mock-data";
import { course } from "@/lib/mock-data";

/** Get all lessons in order across all modules */
export function getAllLessons(): Lesson[] {
  return course.modules.flatMap((m) => m.lessons);
}

/** Find a lesson by its ID */
export function getLessonById(id: string): Lesson | undefined {
  for (const mod of course.modules) {
    const lesson = mod.lessons.find((l) => l.id === id);
    if (lesson) {
      return lesson;
    }
  }
  return undefined;
}

/** Find the module that contains a given lesson */
export function getModuleByLessonId(id: string): Module | undefined {
  return course.modules.find((m) => m.lessons.some((l) => l.id === id));
}

/** Calculate overall course progress */
export function getCourseProgress(): number {
  const allLessons = getAllLessons();
  const completed = allLessons.filter((l) => l.status === "completed").length;
  return Math.round((completed / allLessons.length) * 100);
}
