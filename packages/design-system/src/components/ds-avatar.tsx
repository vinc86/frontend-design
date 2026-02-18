import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import type { ComponentProps } from "react";

const statusColors = {
  online: "bg-green-500",
  offline: "bg-muted-foreground",
  busy: "bg-destructive",
} as const;

interface DsAvatarProps extends ComponentProps<typeof Avatar> {
  /** Fallback initials when image is unavailable. */
  fallback?: string;
  /** Avatar image URL. */
  src?: string;
  /** Online status indicator. */
  status?: "online" | "offline" | "busy";
}

/** EPICODE branded user avatar with image and initials fallback. */
export default function DsAvatar({
  src,
  fallback,
  status,
  ...props
}: DsAvatarProps) {
  return (
    <Avatar {...props}>
      {src && <AvatarImage alt={fallback ?? "Avatar"} src={src} />}
      {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
      {status && <AvatarBadge className={statusColors[status]} />}
    </Avatar>
  );
}
