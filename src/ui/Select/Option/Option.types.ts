import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { OptionStyles } from "./Option.styles";

export type OptionTypes = {
  label: string | number;
  value: string | number;
};

type OptionProps_ = OptionTypes & {};

export type OptionProps = ComponentProps<"div"> &
  VariantProps<typeof OptionStyles> &
  OptionProps_;
