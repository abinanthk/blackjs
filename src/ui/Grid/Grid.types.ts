import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { GridStyles } from "./Grid.styles";

type GridProps_ = {
  color?: string;
};

export type GridProps = ComponentProps<"div"> &
  VariantProps<typeof GridStyles> &
  GridProps_;
