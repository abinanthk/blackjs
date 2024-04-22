import { cva } from "class-variance-authority";

export const ButtonStyles = cva(
  [
    "inline-flex items-center justify-center gap-x-1",
    "font-medium",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid:
          "text-white bg-primary-950 hover:bg-primary-800 disabled:opacity-50",
        outline:
          "text-primary-950 border-2 bg-transparent border-primary-950  hover:bg-primary-100 disabled:opacity-50",
        ghost:
          "text-primary-950 bg-transparent hover:bg-primary-100 disabled:opacity-50",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-11 px-5 text-lg ",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      radius: "md",
    },
  }
);
