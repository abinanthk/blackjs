import React from "react";
import { cn } from "../../utils";
import { ListProps } from "./List.types";

export const List: React.FC<ListProps> = ({
  data,
  renderItem,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {data?.map((item: (typeof data)[0], index: number) => {
        return renderItem?.({ item, index });
      })}
    </div>
  );
};
