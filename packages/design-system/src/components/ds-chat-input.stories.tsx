import type { Meta, StoryObj } from "@storybook/react";
import DsChatInput from "./ds-chat-input.js";

const meta: Meta<typeof DsChatInput> = {
  title: "Components/DsChatInput",
  tags: ["autodocs"],
  component: DsChatInput,
  argTypes: {
    placeholder: {
      control: "text",
      description: "Textarea placeholder text",
    },
    submitLabel: {
      control: "text",
      description: "Label for the submit button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    onSubmit: { action: "submit" },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-md p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DsChatInput>;

export const Default: Story = {};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Ask a question…",
    submitLabel: "Send",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
