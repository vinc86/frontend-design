import type { Meta, StoryObj } from "@storybook/react";
import { SearchIcon } from "lucide-react";
import DsInput from "./ds-input.js";

const meta: Meta<typeof DsInput> = {
  title: "Components/DsInput",
  component: DsInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Label above the input" },
    placeholder: { control: "text", description: "Placeholder text" },
    helperText: { control: "text", description: "Helper text below the input" },
    error: {
      control: "text",
      description: "Error message (activates error state)",
    },
    disabled: { control: "boolean", description: "Disabled state" },
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "url"],
      description: "Input type",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsInput>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@epicode.com",
    helperText: "We'll never share your email.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "you@epicode.com",
    error: "Please enter a valid email address.",
  },
};

export const Search: Story = {
  args: {
    placeholder: "Search in course",
    type: "search",
    leftIcon: <SearchIcon className="size-4" />,
    rightSlot: (
      <kbd className="pointer-events-none inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-muted-foreground text-xs">
        ⌘K
      </kbd>
    ),
  },
};
