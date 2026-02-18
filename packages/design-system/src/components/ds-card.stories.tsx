import type { Meta, StoryObj } from "@storybook/react";
import DsButton from "./ds-button.js";
import DsCard from "./ds-card.js";

const meta: Meta<typeof DsCard> = {
  title: "Components/DsCard",
  component: DsCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Card title text",
    },
    description: {
      control: "text",
      description: "Description shown below the title",
    },
    size: {
      control: "select",
      options: ["default", "sm"],
      description: "Card size variant",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DsCard>;

export const Default: Story = {
  args: {
    title: "Introduction to React",
    description:
      "Learn the fundamentals of React including components, state and props.",
    children: (
      <div className="flex flex-col gap-2 text-muted-foreground text-sm">
        <p>Duration: 45 min</p>
        <p>Difficulty: Beginner</p>
      </div>
    ),
    footer: <DsButton size="sm">Start Lesson</DsButton>,
  },
};
