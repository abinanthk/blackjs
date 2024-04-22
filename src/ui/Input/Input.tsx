import React from "react";
import { cn } from "../../utils";
import { InputStyles } from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  variant,
  size,
  className,
  start,
  end,
  children,
  containerProps,
  ...props
}) => {
  return (
    <div
      className={cn(InputStyles({ variant, className }))}
      {...containerProps}
    >
      {start}
      <input {...props} className={cn("bg-red-300", className)} />
      {end}
    </div>
  );
};
