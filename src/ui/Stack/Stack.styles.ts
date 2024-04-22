import { cva } from "class-variance-authority";

export const StackStyles = cva(["flex"], {
  variants: {
    variant: {
      row: "flex-row",
      col: "flex-col",
    },
    gap: {
      none: "gap-0",
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3",
      xl: "gap-4",
    },
  },
  defaultVariants: {
    variant: "row",
    gap: "none",
  },
});
