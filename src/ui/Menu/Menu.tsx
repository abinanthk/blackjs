import React from "react";
import { cn } from "../../utils";
import { MenuStyles } from "./Menu.styles";
import { MenuProps } from "./Menu.types";

export const Menu: React.FC<MenuProps> = ({
  color,
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={cn(MenuStyles({ className }))}
      style={{ color, ...style }}
      {...props}
    />
  );
};
