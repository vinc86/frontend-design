import { Button } from "@workspace/ui/components/button";
import { Loader2Icon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

interface DsButtonProps extends ComponentProps<typeof Button> {
  /** Shows button loading state */
  isLoading?: boolean;
  /** Optional icon added on the left of the button */
  leftIcon?: ReactNode;
  /** Optional icon added on the right of the button */
  rightIcon?: ReactNode;
}
/**
 * EPICODE branded button with loading state and icon support.
 * Wraps shadcn Button with additional features.
 */
export default function DsButton({
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  asChild,
  ...props
}: DsButtonProps) {
  if (asChild) {
    return (
      <Button asChild {...props}>
        {children}
      </Button>
    );
  }

  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? <Loader2Icon className="animate-spin" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </Button>
  );
}
