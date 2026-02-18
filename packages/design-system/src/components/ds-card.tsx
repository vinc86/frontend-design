import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import type { ComponentProps, ReactNode } from "react";

interface DsCardProps extends ComponentProps<typeof Card> {
  /** Card body content. */
  children?: ReactNode;
  /** Optional description shown below the title. */
  description?: string;
  /** Optional footer content (actions, metadata…). */
  footer?: ReactNode;
  /** Card title text. */
  title?: string;
}

/** EPICODE branded content card for LMS lessons, modules and dashboards. */
export default function DsCard({
  title,
  description,
  footer,
  children,
  ...props
}: DsCardProps) {
  return (
    <Card {...props}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
