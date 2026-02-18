import { Badge } from "@workspace/ui/components/badge";
import type { ComponentProps } from "react";

const statusVariants = {
  completed: "bg-green-500/15 text-green-500 border-green-500/20",
  "in-progress": "bg-yellow-500/15 text-orange-500 border-primary/20",
  locked: "bg-muted text-muted-foreground border-muted",
  new: "bg-pink-500/15 text-pink-500 border-pink-500/20",
} as const;

type Status = keyof typeof statusVariants;

interface DsBadgeProps extends ComponentProps<typeof Badge> {
  /** LMS status variant. */
  status?: Status;
}

/** EPICODE branded badge with LMS status variants. */
export default function DsBadge({
  status,
  className,
  children,
  ...props
}: DsBadgeProps) {
  return (
    <Badge className={status ? statusVariants[status] : className} {...props}>
      {children}
    </Badge>
  );
}
