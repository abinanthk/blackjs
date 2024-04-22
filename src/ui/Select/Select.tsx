import { useState, createContext } from "react";
import { cn } from "../../utils";
import { SelectStyles } from "./Select.styles";
import { SelectProps } from "./Select.types";
import { Option, OptionTypes } from ".";
import { Label } from "../Label";

const SelectContext = createContext<any>(null);

export const Select = ({ className, ...props }: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(2);

  console.log("select child", props.children);

  const handleSelect = (opt: OptionTypes) => {
    props.onChange?.(opt);

    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ selected }}>
      {props.children}
    </SelectContext.Provider>
  );
};

Select.Label = Label;
Select.PlaceHolder = Label;
Select.Option = Option;
