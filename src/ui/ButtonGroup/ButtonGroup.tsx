import React from "react";
import { cn } from "../../utils";
import { ButtonGroupStyles } from "./ButtonGroup.styles";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { Button, Divider } from "..";

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant,
  size,
  radius,
  divider,
  dividerColor,
  className,
  buttons,
  ...props
}) => {
  return (
    <div
      className={cn(
        ButtonGroupStyles({ variant, radius, divider, className })
      )}
      {...props}
    >
      {buttons?.map((btn, i) => {
        return (
          <button
            key={i}
            {...props}
            className={cn(
              ButtonGroupStyles({ size, className })
            )}
          >
            {btn.start}
            {btn.children || btn.text}
            {btn.end}
          </button>
          // <div
          //   key={i}
          //   className={cn(
          //     dividerColor ? `border-[${dividerColor}]` : "border-primary-500"
          //   )}
          // >
          //   <Button
          //     variant={variant}
          //     size={size}
          //     radius={radius}
          //     {...btn}
          //     className={cn(
          //       "border-none",
          //       btn.className
          //     )}
          //   />
          // </div>
        );
      })}
    </div>
  );
};
