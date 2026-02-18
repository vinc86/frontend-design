import { Button } from "@workspace/ui/components/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarProvider,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

interface DsSidebarProps extends ComponentProps<typeof Sidebar> {
  collapsible?: "offcanvas" | "icon" | "none";
  header?: ReactNode;
  logo?: string;
}

function DsSidebarToggle() {
  const { toggleSidebar, open } = useSidebar();
  return (
    <div style={{ position: "relative", width: 0 }}>
      <Button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "0.75rem",
          left: "-0.6rem",
          zIndex: 20,
          width: "1.25rem",
          height: "1.25rem",
          border: 0,
        }}
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
    <SidebarProvider style={{ "--sidebar-width": "20rem" } as CSSProperties}>
      <Sidebar collapsible={collapsible} {...props}>
        {(logo || header) && (
          <SidebarHeader className="flex-row items-center gap-2 overflow-hidden whitespace-nowrap">
            {logo && (
              // biome-ignore lint/performance/noImgElement: not using Next.js Image in design-system
              <img
                alt="EPICODE"
                className="shrink-0"
                height="40"
                src={logo}
                width="40"
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
    </SidebarProvider>
  );
}
