import type { Meta, StoryObj } from "@storybook/react";
import DsAvatar from "./ds-avatar.js";

const meta: Meta<typeof DsAvatar> = {
  title: "Components/DsAvatar",
  component: DsAvatar,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Avatar image URL",
    },
    fallback: {
      control: "text",
      description: "Fallback initials when image is unavailable",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "Avatar size",
    },
    status: {
      control: "select",
      options: ["online", "offline", "busy"],
      description: "Online status indicator",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsAvatar>;

export const Default: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=epicode",
    fallback: "VM",
  },
};

export const Fallback: Story = {
  args: {
    fallback: "EP",
  },
};

export const Large: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=epicode",
    fallback: "VM",
    size: "lg",
  },
};

export const Online: Story = {
  args: {
    src: "https://i.pravatar.cc/150?u=epicode",
    fallback: "VM",
    status: "online",
  },
};
