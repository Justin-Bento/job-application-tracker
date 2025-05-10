import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define props (extending HTMLDivElement attributes)
type WrapperProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof WrapperVariants>;

const WrapperVariants = cva("", {
  variants: {
    width: {
      fullWidthMobile: "mx-auto max-w-7xl sm:px-6 lg:px-8",
      constrained: "max-w-7xl 2xl:container mx-auto px-4 sm:px-6 lg:px-8",
    },
    height: {
      none: "",
      fullHeight: "min-h-dvh",
    },
    spacing: {
      empty: "",
      extraSmall: "my-6",
      large: "my-24",
    },
  },
  defaultVariants: {
    width: "constrained", // Default to constrained container
    height: "none",
    spacing: "empty",
  },
});

export default function Wrapper({
  children,
  className,
  width,
  spacing,
  height,
  ...props
}: WrapperProps) {
  return (
    <div
      className={WrapperVariants({ width, height, spacing, className })}
      {...props}
    >
      {children}
    </div>
  );
}
