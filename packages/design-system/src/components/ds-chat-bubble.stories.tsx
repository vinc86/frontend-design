import type { Meta, StoryObj } from "@storybook/react";
import DsChatBubble from "./ds-chat-bubble.js";

const meta: Meta<typeof DsChatBubble> = {
  title: "Components/DsChatBubble",
  tags: ["autodocs"],
  component: DsChatBubble,
  argTypes: {
    sender: {
      control: "select",
      options: ["user", "assistant"],
      description: "Message sender",
    },
    timestamp: {
      control: "text",
      description: "Optional timestamp string",
    },
    avatarFallback: {
      control: "text",
      description: "Avatar fallback initials",
    },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-md space-y-4 p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DsChatBubble>;

export const Assistant: Story = {
  args: {
    sender: "assistant",
    children: "Hi! How can I help you with your course today?",
    timestamp: "10:30 AM",
  },
};

export const User: Story = {
  args: {
    sender: "user",
    children: "Can you explain React hooks to me?",
    avatarFallback: "VM",
    timestamp: "10:31 AM",
  },
};

export const Conversation: Story = {
  render: () => (
    <div className="space-y-4">
      <DsChatBubble sender="assistant" timestamp="10:30 AM">
        Hi! How can I help you with your course today?
      </DsChatBubble>
      <DsChatBubble avatarFallback="VM" sender="user" timestamp="10:31 AM">
        Can you explain React hooks to me?
      </DsChatBubble>
      <DsChatBubble sender="assistant" timestamp="10:31 AM">
        Of course! React hooks are functions that let you use state and other
        React features in functional components. The most common ones are
        <strong> useState</strong> and <strong>useEffect</strong>.
      </DsChatBubble>
      <DsChatBubble avatarFallback="VM" sender="user" timestamp="10:32 AM">
        Thanks, that makes sense!
      </DsChatBubble>
    </div>
  ),
};

export const LongMessage: Story = {
  args: {
    sender: "assistant",
    children:
      "React hooks were introduced in React 16.8. They allow you to use state and other React features without writing a class. Hooks are backward-compatible, meaning they don't contain any breaking changes and they don't replace your knowledge of React concepts.",
  },
};
