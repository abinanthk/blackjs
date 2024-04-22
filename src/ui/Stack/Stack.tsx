import { cn } from "../../utils";
import { StackStyles } from "./Stack.styles";
import { StackProps } from "./Stack.types";
import { Box } from "..";

export const Stack = ({ variant, gap, className, ...props }: StackProps) => {
  return (
    <div className={cn(StackStyles({ variant, gap, className }))} {...props} />
  );
};

Stack.Item = Box;
