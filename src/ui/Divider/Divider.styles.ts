import { cva } from "class-variance-authority";

export const DividerStyles = cva(["border-primary-950"], {
  variants: {
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
      double: "border-double",
      hidden: "border-hidden",
      none: "border-none",
    },
    size: {
      sm: "border-t",
      md: "border-t-2",
      lg: "border-t-4",
      xl: "border-t-8",
    },
    axis: {
      x: "w-100",
      y: "h-100 border-t-0",
    },
  },
  compoundVariants: [
    {
      axis: "y",
      size: "sm",
      className: "border-l",
    },
    {
      axis: "y",
      size: "md",
      className: "border-l-2",
    },
    {
      axis: "y",
      size: "lg",
      className: "border-l-4",
    },
    {
      axis: "y",
      size: "xl",
      className: "border-l-8",
    },
  ],
  defaultVariants: {
    variant: "solid",
    size: "sm",
    axis: "x",
  },
});
