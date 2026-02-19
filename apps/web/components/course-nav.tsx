"use client";

import DsSidebar from "@workspace/design-system/components/ds-sidebar";
import DsTreeItem from "@workspace/design-system/components/ds-tree-item";
import {
  BookOpenIcon,
  CodeIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  PlayCircleIcon,
} from "lucide-react";

export default function CourseNav() {
  return (
    <DsSidebar header="Frontend Bootcamp" logo="/epicode-logo.svg">
      <DsTreeItem
        defaultOpen
        icon={<LayoutDashboardIcon className="size-4" />}
        label="1. Getting Started"
      >
        <DsTreeItem
          icon={<FileTextIcon className="size-3.5" />}
          label="Welcome & Setup"
        />
        <DsTreeItem
          icon={<CodeIcon className="size-3.5" />}
          label="Dev Environment"
        />
      </DsTreeItem>

      <DsTreeItem
        defaultOpen
        icon={<BookOpenIcon className="size-4" />}
        label="2. HTML & CSS"
      >
        <DsTreeItem
          icon={<FileTextIcon className="size-3.5" />}
          label="Intro to HTML"
        />
        <DsTreeItem
          icon={<FileTextIcon className="size-3.5" />}
          label="CSS Fundamentals"
        />
        <DsTreeItem
          icon={<PlayCircleIcon className="size-3.5" />}
          isActive
          label="Flexbox & Grid"
        />
      </DsTreeItem>

      <DsTreeItem icon={<CodeIcon className="size-4" />} label="3. JavaScript">
        <DsTreeItem
          icon={<FileTextIcon className="size-3.5" />}
          label="Variables & Types"
        />
        <DsTreeItem
          icon={<FileTextIcon className="size-3.5" />}
          label="Functions & Scope"
        />
        <DsTreeItem
          icon={<PlayCircleIcon className="size-3.5" />}
          label="DOM Manipulation"
        />
      </DsTreeItem>

      <DsTreeItem icon={<CodeIcon className="size-4" />} label="4. React">
        <DsTreeItem
          icon={<FileTextIcon className="size-3.5" />}
          label="Components & JSX"
        />
        <DsTreeItem
          icon={<FileTextIcon className="size-3.5" />}
          label="State & Props"
        />
        <DsTreeItem
          icon={<PlayCircleIcon className="size-3.5" />}
          label="Hooks Deep Dive"
        />
      </DsTreeItem>
    </DsSidebar>
  );
}
