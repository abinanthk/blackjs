import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "bg-primary-900 text-[#fff] hover:bg-primary-700",
        outline:
          "border-2 text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
        ghost: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },

    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonStyles({ variant, size, className }))}
      />
    );
  }
);
