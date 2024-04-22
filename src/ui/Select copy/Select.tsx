import React, { useState } from "react";
import { cn } from "../../utils";
import { SelectStyles } from "./Select.styles";
import { SelectProps } from "./Select.types";
import { Option, OptionTypes } from ".";

export const Select = ({ className, ...props }: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSelect = (opt: OptionTypes) => {
    props.onChange?.(opt);

    setOpen(false);
  };

  return (
    <div className={cn(SelectStyles({ className }))} {...props}>
      <div onClick={() => setOpen(true)}>{props.placeholder}</div>
      {open &&
        props.options?.map((opt, i) => {
          return (
            <Option
              key={i}
              label={opt.label}
              value={opt.value}
              onClick={() => handleSelect(opt)}
            />
          );
        })}
    </div>
  );
};
