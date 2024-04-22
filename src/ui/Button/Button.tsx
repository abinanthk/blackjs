import { forwardRef } from "react";
import { cn } from "../../utils";
import { ButtonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button= forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, radius, className, text, start, end, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonStyles({ variant, size, radius, className }))}
        {...props}
      >
        {start}
        {children || text}
        {end}
      </button>
    );
  }
);
