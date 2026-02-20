"use client";

import DsChatBubble from "@workspace/design-system/components/ds-chat-bubble";
import DsChatInput from "@workspace/design-system/components/ds-chat-input";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDownIcon, ChevronUpIcon, UsersIcon } from "lucide-react";
import { useState } from "react";
import { comments } from "@/lib/mock-data";

export default function ChatAside() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="flex h-screen w-70 flex-col overflow-hidden border-l">
      {/* Chat header — toggle button (always on top) */}
      <button
        className="relative z-20 flex w-full cursor-pointer items-center gap-2 overflow-hidden border-b bg-muted px-4 py-5 text-left transition-color"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <UsersIcon className="size-4 text-primary" />
        <span className="font-semibold text-sm">Comments</span>
        <span className="ml-auto flex items-center gap-1 text-foreground text-xs">
          {comments.length}
          {isOpen ? (
            <ChevronUpIcon className="size-4 text-primary" />
          ) : (
            <ChevronDownIcon className="size-4 text-primary" />
          )}
        </span>
      </button>

      {/* Messages + input — slides behind the button */}
      <div
        className={cn(
          "z-10 flex h-120 flex-1 flex-col opacity-0 transition-all duration-500 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full"
        )}
      >
        <div className="h-70 min-h-0 flex-1 space-y-4 overflow-y-auto bg-muted/30 p-5">
          {comments.map((comment) => (
            <DsChatBubble
              avatarFallback={comment.avatarFallback}
              key={comment.id}
              sender={comment.sender}
              timestamp={comment.timestamp}
            >
              {comment.message}
            </DsChatBubble>
          ))}
        </div>

        {/* Chat input */}
        <div className="shrink-0 border-t p-4">
          <DsChatInput placeholder="Leave a comment" />
        </div>
      </div>
    </aside>
  );
}
