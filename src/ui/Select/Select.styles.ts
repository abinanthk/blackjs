import { cva } from "class-variance-authority";

export const SelectStyles = cva(["inline-block bg-red-400"], {
  variants: {
    variant: {
      primary: "text-primary-950",
      secondary: "text-primary-800",
      tertiary: "text-primary-500",
    },
    size: {
      sm: "px-4 py-2",
      md: "px-5 py-2",
      lg: "px-6 py-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
