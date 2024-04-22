import React from "react";
import { cn } from "../../../utils";
import { OptionStyles } from "./Option.styles";
import { OptionProps } from "./Option.types";

export const Option: React.FC<OptionProps> = ({ className, ...props }) => {
  return (
    <div className={cn(OptionStyles({ className }))} {...props}>
      {props.value} :{props.label}
    </div>
  );
};
