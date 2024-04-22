import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { SelectStyles } from "./Select.styles";
import { OptionTypes } from ".";

type SelectProps_ = {
  placeholder?: string;
  options: OptionTypes[];
  value?: string | number;
  onChange?: ({ label, value }: OptionTypes) => void;
};

export type SelectProps = ComponentProps<"div"> &
  VariantProps<typeof SelectStyles> &
  SelectProps_;
