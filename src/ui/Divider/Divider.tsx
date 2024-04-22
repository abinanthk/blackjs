import React from "react";
import { cn } from "../../utils";
import { DividerStyles } from "./Divider.styles";
import { DividerProps } from "./Divider.types";

export const Divider: React.FC<DividerProps> = ({
  variant,
  size,
  axis,
  color,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={cn(DividerStyles({ variant, size, axis, className }))}
      style={{ borderColor: color, ...style }}
      {...props}
    />
  );
};
