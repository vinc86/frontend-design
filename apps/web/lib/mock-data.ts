export type Course = {
  id: string;
  title: string;
  modules: Module[];
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  type: "video" | "article" | "quiz";
  status: "completed" | "in-progress" | "locked";
  content?: string;
};

export type Comment = {
  id: string;
  sender: "user" | "assistant";
  avatarFallback?: string;
  message: string;
  timestamp: string;
};

export const course: Course = {
  id: "frontend-bootcamp",
  title: "Frontend Bootcamp",
  modules: [
    {
      id: "mod-1",
      title: "Getting Started",
      lessons: [
        {
          id: "les-1-1",
          title: "Welcome & Setup",
          type: "article",
          status: "completed",
          content: `## Welcome to the Frontend Bootcamp!

In this lesson we cover the **tools and environment** you'll need throughout the course.

### What you'll need

- A modern browser (Chrome, Firefox, or Edge)
- A code editor — we recommend [VS Code](https://code.visualstudio.com)
- Node.js **v20+** installed on your machine`,
        },
        {
          id: "les-1-2",
          title: "Dev Environment",
          type: "video",
          status: "completed",
          content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "les-1-3",
          title: "Your First Page",
          type: "quiz",
          status: "completed",
          content: `## Quiz: Your First Page

Build a simple HTML page that includes:

1. A **heading** with your name
2. A **paragraph** introducing yourself
3. An **unordered list** of your three favourite technologies`,
        },
      ],
    },
    {
      id: "mod-2",
      title: "HTML & CSS",
      lessons: [
        {
          id: "les-2-1",
          title: "Intro to HTML",
          type: "article",
          status: "completed",
          content: `## What is HTML?

**HTML** (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.

### Key Concepts

- **Elements** are the building blocks of HTML pages
- **Tags** usually come in pairs: \`<p>\` and \`</p>\`
- **Attributes** provide additional information about elements`,
        },
        {
          id: "les-2-2",
          title: "CSS Fundamentals",
          type: "video",
          status: "completed",
          content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "les-2-3",
          title: "Flexbox & Grid",
          type: "video",
          status: "in-progress",
          content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "les-2-4",
          title: "Responsive Design",
          type: "article",
          status: "completed",
          content: `## Responsive Web Design

Responsive web design is about creating web pages that look good on **all devices** — desktops, tablets, and phones.

### Best Practices

1. Use **relative units** (\`rem\`, \`%\`, \`vw\`) instead of fixed pixels
2. Design **mobile-first**, then add complexity for larger screens
3. Test on real devices, not just browser DevTools`,
        },
      ],
    },
    {
      id: "mod-3",
      title: "JavaScript",
      lessons: [
        {
          id: "les-3-1",
          title: "Variables & Types",
          type: "article",
          status: "locked",
          content: `## Variables & Data Types

JavaScript variables can be declared using \`let\`, \`const\`, or \`var\`. Each has different scoping rules.

### Declaration Keywords

| Keyword | Scope    | Reassignable | Hoisted |
|---------|----------|--------------|---------|
| \`var\`   | Function | ✅           | ✅      |
| \`let\`   | Block    | ✅           | ❌      |
| \`const\` | Block    | ❌           | ❌      |

### Primitive Types

- \`string\` — \`"hello"\`
- \`number\` — \`42\`, \`3.14\`
- \`boolean\` — \`true\`, \`false\`
- \`null\` and \`undefined\`

\`\`\`js
const name = "Epicode";
let score = 100;
\`\`\`

> ⚠️ Always prefer \`const\` unless you need to reassign the variable.`,
        },
        {
          id: "les-3-2",
          title: "Functions & Scope",
          type: "video",
          status: "locked",
          content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "les-3-3",
          title: "DOM Manipulation",
          type: "video",
          status: "locked",
          content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: "les-3-4",
          title: "JS Quiz",
          type: "quiz",
          status: "locked",
          content: `## Quiz: JavaScript Fundamentals

Test your knowledge of JavaScript fundamentals.

### Instructions

1. Declare a variable \`greeting\` with the value \`"Hello, World!"\`
2. Write a function \`add(a, b)\` that returns the sum of two numbers
3. Use \`document.querySelector\` to select an element with the class \`.output\`
4. Set its \`textContent\` to the result of \`add(3, 7)\`

> ⏱ You have **20 minutes** to complete this quiz.`,
        },
      ],
    },
  ],
};

/** Comments for the active lesson */
export const comments: Comment[] = [
  {
    id: "c1",
    sender: "assistant",
    message: "Welcome to Flexbox & Grid! Feel free to ask questions here.",
    timestamp: "09:15 AM",
  },
  {
    id: "c2",
    sender: "user",
    avatarFallback: "VM",
    message: "Is it better to use Grid or Flexbox for a navigation bar?",
    timestamp: "09:20 AM",
  },
  {
    id: "c3",
    sender: "assistant",
    message:
      "Great question! Flexbox is usually the better choice for navbars since they're one-dimensional. Grid shines for two-dimensional layouts.",
    timestamp: "09:21 AM",
  },
  {
    id: "c4",
    sender: "user",
    avatarFallback: "VM",
    message: "That makes sense, thanks! What about centering elements?",
    timestamp: "09:25 AM",
  },
  {
    id: "c5",
    sender: "assistant",
    message:
      "Both work well for centering. With Flexbox: `display: flex; justify-content: center; align-items: center;`. With Grid: `display: grid; place-items: center;`. Grid is more concise for centering.",
    timestamp: "09:26 AM",
  },
];

/** Calculate overall course progress */
export function getCourseProgress(): number {
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const completed = allLessons.filter((l) => l.status === "completed").length;
  return Math.round((completed / allLessons.length) * 100);
}
