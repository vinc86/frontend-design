"use client";

import { GlobeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { setLocale } from "@/i18n/actions";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale() {
    const next = locale === "en" ? "it" : "en";
    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  }

  const nextLocale = locale === "en" ? "IT" : "EN";

  return (
    <button
      aria-label={`Switch to ${nextLocale}`}
      className="flex h-8 cursor-pointer items-center gap-1 rounded-full border border-border bg-muted/50 px-2.5 hover:bg-muted"
      disabled={isPending}
      onClick={switchLocale}
      type="button"
    >
      <GlobeIcon className="h-3.5 w-3.5 text-muted-foreground" />
      <span className="font-medium text-xs">{nextLocale}</span>
    </button>
  );
}
