import { VariantProps } from "class-variance-authority";
import  { ComponentProps } from "react";
import { TextStyles } from "./Text.styles";

type TextProps_ = {
  color?: string;
};

export type TextProps = ComponentProps<"span"> &
  VariantProps<typeof TextStyles> &
  TextProps_;
