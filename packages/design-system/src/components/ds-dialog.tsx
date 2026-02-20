import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import type { ReactNode } from "react";

export interface DsDialogProps {
  /** Label for the cancel button (default: "Cancel") */
  cancelLabel?: string;
  /** Dialog body content */
  children?: ReactNode;
  /** Label for the confirm button (default: "Confirm") */
  confirmLabel?: string;
  /** Confirm button variant */
  confirmVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  /** Dialog description */
  description?: string;
  /** Custom footer — if omitted, a default Cancel / Confirm footer is rendered */
  footer?: ReactNode;
  /** Called when confirm is clicked */
  onConfirm?: () => void;
  /** Called when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Controlled open state */
  open?: boolean;
  /** Dialog title */
  title: string;
  /** The element that opens the dialog */
  trigger?: ReactNode;
}

export default function DsDialog({
  trigger,
  title,
  description,
  children,
  footer,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmVariant = "default",
  onConfirm,
  open,
  onOpenChange,
}: DsDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className={description ? "" : "sr-only"}>
            {description ?? title}
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          {footer ?? (
            <>
              <DialogClose asChild>
                <Button variant="outline">{cancelLabel}</Button>
              </DialogClose>
              <Button onClick={onConfirm} variant={confirmVariant}>
                {confirmLabel}
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
