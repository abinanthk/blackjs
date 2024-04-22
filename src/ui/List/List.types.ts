import { ComponentProps } from "react";

type RenderItemType<T> = ({
  item,
  index,
}: {
  item: T;
  index: number;
}) => React.ReactElement;

type ListProps_<T> = {
  data: T[];
  renderItem: RenderItemType<T>;
};

export type ListProps = ComponentProps<"div"> & ListProps_<any>;
