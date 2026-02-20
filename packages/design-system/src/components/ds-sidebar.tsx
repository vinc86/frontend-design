"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

interface DsSidebarProps extends ComponentProps<typeof Sidebar> {
  collapsible?: "offcanvas" | "icon" | "none";
  header?: ReactNode;
  logo?: string;
}

function DsSidebarToggle() {
  const { toggleSidebar, open } = useSidebar();
  return (
    <div className="relative w-0">
      <Button
        className="absolute top-20 -left-2.5 z-20 size-5 rounded-full border-0"
        onClick={toggleSidebar}
        variant="outline"
      >
        {open ? (
          <ChevronsLeftIcon size={14} />
        ) : (
          <ChevronsRightIcon size={14} />
        )}
      </Button>
    </div>
  );
}

/** EPICODE branded sidebar with LMS navigation structure. */
export default function DsSidebar({
  header,
  logo,
  children,
  collapsible = "offcanvas",
  ...props
}: DsSidebarProps) {
  return (
    <>
      <Sidebar collapsible={collapsible} {...props}>
        {(logo || header) && (
          <SidebarHeader className="flex-row items-center gap-3 overflow-hidden">
            {logo && (
              // biome-ignore lint/performance/noImgElement: not using Next.js Image in design-system
              <img
                alt="EPICODE"
                className="shrink-0"
                height="30"
                src={logo}
                width="30"
              />
            )}
            {header && (
              <span className="overflow-hidden text-ellipsis font-semibold">
                {header}
              </span>
            )}
          </SidebarHeader>
        )}
        <SidebarContent className="pt-5">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>{children}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <DsSidebarToggle />
    </>
  );
}
