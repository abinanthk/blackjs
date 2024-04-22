import { cva } from "class-variance-authority";

export const OptionStyles = cva(
  [
    "font-medium",
    "text-white bg-primary-950 cursor-pointer ",
    "hover:bg-primary-300 hover:text-primary-950",
  ],
  {
    variants: {
      type: {
        default: "",
      },
    },
    defaultVariants: {
      // type: "default",
    },
  }
);
