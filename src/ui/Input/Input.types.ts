import { VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { InputStyles } from "./Input.styles";

type InputProps_ = {
  start?: React.ReactElement;
  end?: React.ReactElement;
  containerProps?: ComponentProps<"div">;
};

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof InputStyles> &
  InputProps_;
