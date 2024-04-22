import { cva } from "class-variance-authority";

export const LabelStyles = cva(["font-medium"], {
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
});
