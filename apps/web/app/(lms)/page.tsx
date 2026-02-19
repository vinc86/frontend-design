import { SidebarInset } from "@workspace/ui/components/sidebar";
import { PlayCircleIcon } from "lucide-react";
import ChatAside from "@/components/chat-aside";
import CourseHeader from "@/components/course-header";
import CourseNav from "@/components/course-nav";

export default function LmsHomePage() {
  return (
    <>
      <CourseNav />
      <SidebarInset>
        <div className="flex h-svh flex-col">
          <div className="flex h-full">
            <div className="flex flex-1 flex-col">
              <CourseHeader />
              <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <PlayCircleIcon className="size-12" />
                  <span className="text-sm">Select a lesson to start</span>
                </div>
              </div>
            </div>
            <ChatAside />
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
