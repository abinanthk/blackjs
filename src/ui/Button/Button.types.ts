import { VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { ButtonStyles } from "./Button.styles";

type ButtonProps_ = {
  text?: string;
  start?: React.ReactElement;
  end?: React.ReactElement;
};

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof ButtonStyles> & ButtonProps_;
