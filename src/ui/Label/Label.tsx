import React from "react";
import { cn } from "../../utils";
import { LabelStyles } from "./Label.styles";
import { LabelProps } from "./Label.types";

export const Label: React.FC<LabelProps> = ({
  variant,
  size,
  className,
  text,
  start,
  end,
  children,
  ...props
}) => {
  return (
    <label className={cn(LabelStyles({ variant, size, className }))} {...props}>
      {start}
      {children || text}
      {end}
    </label>
  );
};
