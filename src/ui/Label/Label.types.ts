import { VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { LabelStyles } from "./Label.styles";

type LabelProps_ = {
  text?: string;
  start?: React.ReactElement;
  end?: React.ReactElement;
};

export type LabelProps = ComponentProps<"label"> &
  VariantProps<typeof LabelStyles> &
  LabelProps_;
