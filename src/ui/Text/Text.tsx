import React from "react";
import { cn } from "../../utils";
import { TextStyles } from "./Text.styles";
import { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = ({
  variant,
  size,
  color,
  className,
  style,
  ...props
}) => {
  return (
    <span
      className={cn(TextStyles({ variant, size, className }))}
      style={{ color, ...style }}
      {...props}
    />
  );
};
