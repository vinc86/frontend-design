import type { Preview } from "@storybook/react";
import "@workspace/design-system/globals.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Theme",
      toolbar: {
        title: "Theme",
        icon: "moon",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      document.documentElement.classList.toggle("dark", theme === "dark");
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
