import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { StackStyles } from "./Stack.styles";

type StackProps_ = {
  color?: string;
};

export type StackProps = ComponentProps<"div"> &
  VariantProps<typeof StackStyles> &
  StackProps_;
