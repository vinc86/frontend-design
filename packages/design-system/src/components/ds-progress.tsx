import { Progress } from "@workspace/ui/components/progress";
import type { ComponentProps } from "react";

interface DsProgressProps extends ComponentProps<typeof Progress> {
  /** Label displayed above the progress bar. */
  label?: string;
  /** Whether to show the percentage text on the right. */
  showPercentage?: boolean;
  /** Progress value (0–100). */
  value?: number;
}

/** EPICODE branded progress bar with label and percentage text. */
export default function DsProgress({
  label,
  showPercentage = false,
  value = 0,
  ...props
}: DsProgressProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="font-medium">{label}</span>}
          {showPercentage && (
            <span className="text-muted-foreground">{value}%</span>
          )}
        </div>
      )}
      <Progress value={value} {...props} />
    </div>
  );
}
