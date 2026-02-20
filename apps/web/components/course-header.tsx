import DsAvatar from "@workspace/design-system/components/ds-avatar";
import DsInput from "@workspace/design-system/components/ds-input";
import { BellIcon, SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "./theme-switcher";

export default function CourseHeader() {
  const t = useTranslations("header");
  return (
    <header className="flex items-center justify-between px-7 py-5">
      <div className="w-70">
        <DsInput
          leftIcon={<SearchIcon className="size-4" />}
          placeholder={t("searchPlaceholder")}
          rightSlot={
            <kbd className="inline-flex h-5 items-center gap-0.5 rounded border border-accent-foreground/20 bg-muted px-1.5 font-mono text-accent-foreground/50 text-xs">
              <span className="text-lg">⌘</span>K
            </kbd>
          }
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Theme switcher */}
        <ThemeSwitcher />
        {/* Language switcher */}

        {/* Notification bell */}
        <button className="relative cursor-pointer" type="button">
          <BellIcon className="size-5 text-muted-foreground" />
          <span className="absolute -top-1.5 -right-1.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] text-white">
            1
          </span>
        </button>
        {/* User avatar */}
        <DsAvatar
          className="cursor-pointer"
          fallback="VM"
          src="https://i.pravatar.cc/150"
        />
      </div>
    </header>
  );
}
