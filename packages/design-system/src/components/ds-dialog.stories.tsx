import type { Meta, StoryObj } from "@storybook/react";
import DsButton from "./ds-button.js";
import DsDialog from "./ds-dialog.js";

export default {
  title: "Components/DsDialog",
  tags: ["autodocs"],
  component: DsDialog,
  argTypes: {
    title: {
      control: "text",
      description: "Dialog title",
    },
    description: {
      control: "text",
      description: "Optional description below the title",
    },
    confirmLabel: {
      control: "text",
      description: "Label for the confirm button",
    },
    cancelLabel: {
      control: "text",
      description: "Label for the cancel button",
    },
    confirmVariant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Variant of the confirm button",
    },
  },
} satisfies Meta<typeof DsDialog>;

type Story = StoryObj<typeof DsDialog>;

export const Default: Story = {
  args: {
    trigger: <DsButton variant="outline">Edit profile</DsButton>,
    title: "Edit profile",
    description:
      "Make changes to your profile here. Click save when you're done.",
    confirmLabel: "Save changes",
    children: (
      <div className="grid gap-4 py-4">
        <p className="text-muted-foreground text-sm">
          Dialog body content goes here.
        </p>
      </div>
    ),
  },
};

export const Destructive: Story = {
  args: {
    trigger: <DsButton variant="destructive">Delete account</DsButton>,
    title: "Are you sure?",
    description:
      "This action cannot be undone. This will permanently delete your account.",
    confirmLabel: "Delete",
    confirmVariant: "destructive",
  },
};

export const WithCustomContent: Story = {
  args: {
    trigger: <DsButton>Settings</DsButton>,
    title: "Notification settings",
    description: "Configure how you receive notifications.",
    confirmLabel: "Save",
    children: (
      <div className="grid gap-3 py-2">
        <label className="flex items-center gap-2 text-sm">
          <input defaultChecked type="checkbox" />
          Email notifications
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Push notifications
        </label>
      </div>
    ),
  },
};
