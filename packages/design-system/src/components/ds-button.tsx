import { Button } from "@workspace/ui/components/button";
import { Loader2Icon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

interface DsButtonProps extends ComponentProps<typeof Button> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
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
  ...props
}: DsButtonProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? <Loader2Icon className="animate-spin" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </Button>
  );
}
