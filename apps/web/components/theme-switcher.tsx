"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label={
        resolvedTheme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border bg-muted/50 hover:bg-muted"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      type="button"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-orange-500" />
      ) : (
        <Moon className="h-4 w-4 text-blue-400" />
      )}
    </button>
  );
}
