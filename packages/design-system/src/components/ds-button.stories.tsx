import type { Meta, StoryObj } from "@storybook/react";
import { ChevronRight } from "lucide-react";
import DsButton from "./ds-button.js";

export default {
  title: "Components/DsButton",
  tags: ["autodocs"],
  component: DsButton,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "link",
        "destructive",
      ],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    isLoading: {
      control: "boolean",
      description: "Shows spinner and disables the button",
    },
  },
} satisfies Meta<typeof DsButton>;

type ButtonStory = StoryObj<typeof DsButton>;

export const Default: ButtonStory = { args: { children: "Click me" } };

export const Secondary: ButtonStory = {
  args: { children: "Secondary", variant: "secondary" },
};
export const Outline: ButtonStory = {
  args: { children: "Outline", variant: "outline" },
};
export const Ghost: ButtonStory = {
  args: { children: "Ghost", variant: "ghost" },
};
export const Loading: ButtonStory = {
  args: { children: "Loading", isLoading: true },
};
export const WithIcons: ButtonStory = {
  args: { children: "Next", rightIcon: <ChevronRight className="h-4 w-4" /> },
};
