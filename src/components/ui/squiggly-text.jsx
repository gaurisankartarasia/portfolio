import React from "react";
import { cn } from "@/lib/utils";

export function SquigglyText({
  children,
  as: Tag = "span",
  className,
  style,
}) {
  return (
    <Tag
      style={style}
      className={cn("inline-block tracking-tight", className)}
    >
      {children}
    </Tag>
  );
}
