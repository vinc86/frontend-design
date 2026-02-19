"use client";

import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDownIcon, ChevronUp } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

interface DsTreeItemProps {
  children?: ReactNode;
  defaultOpen?: boolean;
  /** Dims the item text (e.g. locked lessons) */
  disabled?: boolean;
  /** Navigation URL — renders the leaf as a link */
  href?: string;
  icon?: ReactNode;
  isActive?: boolean;
  label: string;
  onClick?: () => void;
}

/** Collapsible tree navigation item for LMS course structure. */
export default function DsTreeItem({
  label,
  icon,
  children,
  disabled = false,
  defaultOpen = false,
  href,
  isActive = false,
  onClick,
}: DsTreeItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);
  const { open: sidebarOpen } = useSidebar();
  const hasChildren = !!children;

  if (!hasChildren) {
    if (href && !disabled) {
      return (
        <SidebarMenuItem>
          <SidebarMenuSubButton asChild isActive={isActive} size="sm">
            <a href={href} onClick={onClick}>
              {icon}
              <span>{label}</span>
            </a>
          </SidebarMenuSubButton>
        </SidebarMenuItem>
      );
    }

    return (
      <SidebarMenuItem>
        <SidebarMenuSubButton
          className={cn(
            disabled ? "pointer-events-none opacity-40" : "cursor-pointer"
          )}
          isActive={isActive}
          onClick={disabled ? undefined : onClick}
          size="sm"
        >
          {icon}
          <span>{label}</span>
        </SidebarMenuSubButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className={cn(
          disabled ? "pointer-events-none opacity-40" : "cursor-pointer"
        )}
        isActive={isActive}
        onClick={() => setIsExpanded((prev) => !prev)}
        size="sm"
      >
        {sidebarOpen && (isExpanded ? <ChevronUp /> : <ChevronDownIcon />)}
        {icon}
        <span>{label}</span>
      </SidebarMenuButton>
      {isExpanded && <SidebarMenuSub>{children}</SidebarMenuSub>}
    </SidebarMenuItem>
  );
}
