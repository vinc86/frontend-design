import type { Meta, StoryObj } from "@storybook/react";
import DsButton from "./ds-button.js";
import DsTooltip from "./ds-tooltip.js";

export default {
  title: "Components/DsTooltip",
  tags: ["autodocs"],
  component: DsTooltip,
  argTypes: {
    content: {
      control: "text",
      description: "Tooltip text content",
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Placement side",
    },
    sideOffset: {
      control: { type: "number", min: 0, max: 20 },
      description: "Offset in px from the trigger",
    },
  },
} satisfies Meta<typeof DsTooltip>;

type Story = StoryObj<typeof DsTooltip>;

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    children: <DsButton variant="outline">Hover me</DsButton>,
  },
};

export const Sides: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-16">
      <DsTooltip content="Top tooltip" side="top">
        <DsButton variant="outline">Top</DsButton>
      </DsTooltip>
      <DsTooltip content="Right tooltip" side="right">
        <DsButton variant="outline">Right</DsButton>
      </DsTooltip>
      <DsTooltip content="Bottom tooltip" side="bottom">
        <DsButton variant="outline">Bottom</DsButton>
      </DsTooltip>
      <DsTooltip content="Left tooltip" side="left">
        <DsButton variant="outline">Left</DsButton>
      </DsTooltip>
    </div>
  ),
};
