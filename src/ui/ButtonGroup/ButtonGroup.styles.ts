import { cva } from "class-variance-authority";

export const ButtonGroupStyles = cva(
  ["inline-flex items-center justify-center"],
  {
    variants: {
      variant: {
        solid: "bg-primary-950 text-primary-50",
        outline: "border-2 border-primary-950 ",
        ghost: "bg-transparent",
      },
      size: {
        sm: "py-1 px-2",
        md: "py-2 px-3",
        lg: "py-4 px-4",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      divider: {
        none: "divide-x-0",
        sm: "divide-x",
        md: "divide-x-2",
        lg: "divide-x-4",
        xl: "divide-x-8",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "md",
      divider: "md",
    },
  }
);
