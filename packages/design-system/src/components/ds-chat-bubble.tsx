import DsAvatar from "@workspace/design-system/components/ds-avatar";
import { cn } from "@workspace/ui/lib/utils";
import { BotIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface DsChatBubbleProps {
  /** Avatar fallback initials (default: "U" for user, bot icon for assistant) */
  avatarFallback?: string;
  /** Avatar src for user messages */
  avatarSrc?: string;
  /** Message content — text or rich content */
  children: ReactNode;
  /** Who sent the message */
  sender?: "user" | "assistant";
  /** Optional timestamp string */
  timestamp?: string;
}

/**
 * Chat message bubble with user/assistant variants.
 * User messages align right with primary background.
 * Assistant messages align left with muted background.
 */
export default function DsChatBubble({
  children,
  sender = "assistant",
  avatarSrc,
  avatarFallback,
  timestamp,
}: DsChatBubbleProps) {
  const isUser = sender === "user";

  return (
    <div className={cn("flex max-w-[85%] flex-col gap-3", isUser && "m-auto")}>
      <div className="mt-1">
        {isUser ? (
          <DsAvatar
            className="ml-auto"
            fallback={avatarFallback ?? "U"}
            src={avatarSrc}
          />
        ) : (
          <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <BotIcon className="size-4" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div
          className={cn(
            "w-fit rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isUser
              ? "ml-auto rounded-tr-none bg-primary text-primary-foreground"
              : "rounded-tl-none bg-muted text-foreground"
          )}
        >
          {children}
        </div>
        {timestamp && (
          <span
            className={cn(
              "text-muted-foreground text-xs",
              isUser && "text-right"
            )}
          >
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}
