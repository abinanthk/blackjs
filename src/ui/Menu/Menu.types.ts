import { VariantProps } from "class-variance-authority";
import  { ComponentProps } from "react";
import { MenuStyles } from "./Menu.styles";

type MenuProps_ = {
  
};

export type MenuProps = ComponentProps<"div"> &
  VariantProps<typeof MenuStyles> &
  MenuProps_;
