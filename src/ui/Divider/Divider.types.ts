import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { DividerStyles } from "./Divider.styles";

type DividerProps_ = {
  color?: string;
};

export type DividerProps = ComponentProps<"div"> &
  VariantProps<typeof DividerStyles> &
  DividerProps_;
