import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import type { ComponentProps, ReactNode } from "react";

interface DsInputProps extends ComponentProps<typeof Input> {
  /** Error message displayed below the input. */
  error?: string;
  /** Helper text displayed below the input. */
  helperText?: string;
  /** Label displayed above the input. */
  label?: string;
  /** Icon rendered on the left side of the input. */
  leftIcon?: ReactNode;
  /** Slot rendered on the right side (e.g. keyboard shortcut badge). */
  rightSlot?: ReactNode;
}

/** EPICODE branded input with label, helper text and error state. */
export default function DsInput({
  label,
  helperText,
  error,
  id,
  leftIcon,
  rightSlot,
  className,
  ...props
}: DsInputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="font-medium text-sm" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="pointer-events-none absolute left-2.5 text-muted-foreground">
            {leftIcon}
          </span>
        )}
        <Input
          aria-invalid={!!error}
          className={cn(
            "rounded-sm border border-accent-foreground/20 p-5",
            "placeholder:text-accent-foreground/50",
            leftIcon && "pl-9",
            rightSlot && "pr-14",
            className
          )}
          id={inputId}
          {...props}
        />
        {rightSlot && <div className="absolute right-3">{rightSlot}</div>}
      </div>
      {error && <p className="text-destructive text-xs">{error}</p>}
      {!error && helperText && (
        <p className="text-muted-foreground text-xs">{helperText}</p>
      )}
    </div>
  );
}
