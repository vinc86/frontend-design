import type { Meta, StoryFn } from "@storybook/react";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import {
  BookOpenIcon,
  BoxIcon,
  FileIcon,
  FileTextIcon,
  ListIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import logo from "../assets/epicode-logo.png";
import DsSidebar from "./ds-sidebar.js";
import DsTreeItem from "./ds-tree-item.js";

export default {
  title: "Components/DsSidebar",
  tags: ["autodocs"],
  component: DsSidebar,
  parameters: { layout: "fullscreen" },
  argTypes: {
    collapsible: {
      control: "select",
      options: ["offcanvas", "icon", "none"],
      description: "Sidebar collapse behavior",
    },
    header: {
      control: "text",
      description: "Header text displayed next to the logo",
    },
    logo: {
      control: "text",
      description: "Logo image URL",
    },
  },
} satisfies Meta<typeof DsSidebar>;

/** Full LMS navigation tree with collapsible sidebar. */
export const Default: StoryFn<typeof DsSidebar> = (args) => {
  return (
    <SidebarProvider style={{ "--sidebar-width": "20rem" } as CSSProperties}>
      <DsSidebar {...args}>
        <DsTreeItem icon={<BoxIcon />} label="Welcome: Data Analyst" />
        <DsTreeItem defaultOpen icon={<BoxIcon />} label="M0. Fundamentals">
          <DsTreeItem
            defaultOpen
            icon={<BookOpenIcon />}
            label="Introduzione al mondo dei dati"
          >
            <DsTreeItem defaultOpen icon={<ListIcon />} label="Video">
              <DsTreeItem
                icon={<FileIcon />}
                label="1. Intro all'analisi dei dati (1)"
              />
              <DsTreeItem
                icon={<FileIcon />}
                isActive
                label="2. Intro all'analisi dei dati (2)"
              />
              <DsTreeItem icon={<FileIcon />} label="3. Analisi dati" />
              <DsTreeItem icon={<FileIcon />} label="4. Gestione dati" />
            </DsTreeItem>
            <DsTreeItem defaultOpen icon={<ListIcon />} label="Teoria">
              <DsTreeItem icon={<FileTextIcon />} label="Dati 1" />
            </DsTreeItem>
          </DsTreeItem>
          <DsTreeItem
            icon={<BookOpenIcon />}
            label="Figure professionali & Open Da..."
          />
          <DsTreeItem icon={<BookOpenIcon />} label="Business intelligence" />
          <DsTreeItem icon={<BookOpenIcon />} label="Excel" />
          <DsTreeItem icon={<BookOpenIcon />} label="Esame finale" />
        </DsTreeItem>
      </DsSidebar>
    </SidebarProvider>
  );
};
Default.args = {
  collapsible: "icon",
  header: "Data Analytics & AI",
  logo,
};
