import { cn } from "../../utils";
import { GridStyles } from "./Grid.styles";
import { GridProps } from "./Grid.types";
import { Box } from "..";

export const Grid = ({ variant, gap, className, ...props }: GridProps) => {
  return (
    <div className={cn(GridStyles({ variant, gap, className }))} {...props} />
  );
};

Grid.Item = Box;
