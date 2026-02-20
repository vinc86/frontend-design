import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import type { ReactNode } from "react";

export interface DsTooltipProps {
  /** The element that receives the tooltip on hover */
  children: ReactNode;
  /** Tooltip text content */
  content: string;
  /** Placement side (default: "top") */
  side?: "top" | "right" | "bottom" | "left";
  /** Offset in px from the trigger (default: 4) */
  sideOffset?: number;
}

/**
 * EPICODE branded tooltip.
 * Wrap any element and pass a `content` string.
 */
export default function DsTooltip({
  children,
  content,
  side = "top",
  sideOffset = 4,
}: DsTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} sideOffset={sideOffset}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
