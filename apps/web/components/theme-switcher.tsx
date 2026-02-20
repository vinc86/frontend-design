"use client";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

// biome-ignore lint/suspicious/noEmptyBlockStatements: noop unsubscribe for useSyncExternalStore
const emptySubscribe = () => () => {};

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("theme");
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label={
        resolvedTheme === "dark" ? t("switchToLight") : t("switchToDark")
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
