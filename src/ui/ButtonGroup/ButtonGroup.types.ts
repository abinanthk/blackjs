import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { ButtonGroupStyles } from "./ButtonGroup.styles";
import { ButtonProps } from "../Button";

type ButtonGroupProps_ = {
  buttons?: ButtonProps[];
  dividerColor?: string;
  className?: string;
};

export type ButtonGroupProps = VariantProps<typeof ButtonGroupStyles> &
  ButtonGroupProps_;
