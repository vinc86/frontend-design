import type { Meta, StoryObj } from "@storybook/react";
import DsBadge from "./ds-badge.js";

const meta: Meta<typeof DsBadge> = {
  title: "Components/DsBadge",
  component: DsBadge,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["completed", "in-progress", "locked", "new"],
      description: "LMS status variant",
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "Base badge variant (ignored when status is set)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsBadge>;

export const Completed: Story = {
  args: { status: "completed", children: "Completed" },
};

export const InProgress: Story = {
  args: { status: "in-progress", children: "In Progress" },
};

export const Locked: Story = {
  args: { status: "locked", children: "Locked" },
};

export const New: Story = {
  args: { status: "new", children: "New" },
};
