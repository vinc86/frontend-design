import type { Meta, StoryObj } from "@storybook/react";
import DsProgress from "./ds-progress.js";

const meta: Meta<typeof DsProgress> = {
  title: "Components/DsProgress",
  component: DsProgress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Progress value (0–100)",
    },
    label: { control: "text", description: "Label above the bar" },
    showPercentage: { control: "boolean", description: "Show percentage text" },
  },
};

export default meta;
type Story = StoryObj<typeof DsProgress>;

export const Default: Story = {
  args: {
    value: 65,
    label: "Course progress",
    showPercentage: true,
  },
};
