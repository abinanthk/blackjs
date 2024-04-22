import { cva } from "class-variance-authority";

export const InputStyles = cva(
  ["inline-flex items-center gap-x-1", "font-medium", "border-2 border-red-800"],
  {
    variants: {
      variant: {
        primary: "text-primary-950",
        secondary: "text-primary-800",
        tertiary: "text-primary-500",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
