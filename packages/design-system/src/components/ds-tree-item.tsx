import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import { ChevronDownIcon, ChevronUp } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

interface DsTreeItemProps {
  children?: ReactNode;
  defaultOpen?: boolean;
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

  defaultOpen = false,
  isActive = false,
  onClick,
}: DsTreeItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);
  const { open: sidebarOpen } = useSidebar();
  const hasChildren = !!children;

  if (!hasChildren) {
    return (
      <SidebarMenuItem>
        <SidebarMenuSubButton isActive={isActive} onClick={onClick} size="sm">
          {icon}
          <span>{label}</span>
        </SidebarMenuSubButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        size="sm"
        {...(isActive && { isActive: true })}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {sidebarOpen && (isExpanded ? <ChevronUp /> : <ChevronDownIcon />)}
        {icon}
        <span>{label}</span>
      </SidebarMenuButton>
      {isExpanded && <SidebarMenuSub>{children}</SidebarMenuSub>}
    </SidebarMenuItem>
  );
}
