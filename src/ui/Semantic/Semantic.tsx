import { ElementType, HTMLAttributes, FC } from "react";

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

export const Component: FC<ComponentProps> = ({
  as: Tag = "div",
  ...props
}) => {
  return <Tag {...props} />;
};
