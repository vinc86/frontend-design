import { ChevronUpIcon, UsersIcon } from "lucide-react";

export default function ChatAside() {
  return (
    <aside className="flex w-80 flex-col border-l">
      {/* Chat header */}
      <header className="flex items-center gap-2 border-b px-4 py-3">
        <UsersIcon className="size-4 text-primary" />
        <span className="font-semibold text-sm">Comments</span>
        <ChevronUpIcon className="ml-auto size-4 text-primary" />
      </header>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4">
        <p className="text-muted-foreground text-sm">
          Chat messages placeholder
        </p>
      </div>

      {/* Chat input */}
      <div className="border-t p-4">
        <p className="text-muted-foreground text-sm">Chat input placeholder</p>
      </div>
    </aside>
  );
}
