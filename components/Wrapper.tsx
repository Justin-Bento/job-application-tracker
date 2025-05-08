import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define props (extending HTMLDivElement attributes)
type WrapperProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof WrapperVariants>;

const WrapperVariants = cva("", {
  variants: {
    layout: {
      fullWidthMobile: "mx-auto max-w-7xl sm:px-6 lg:px-8",
      constrained: "max-w-7xl 2xl:container mx-auto px-4 sm:px-6 lg:px-8",
    },
    height: {
      none: "",
      fullHeight: "min-h-dvh",
    },
  },
  defaultVariants: {
    layout: "constrained", // Default to constrained container
    height: "none",
  },
});

export default function Wrapper({
  children,
  className,
  layout,
  height,
  ...props
}: WrapperProps) {
  return (
    <div className={WrapperVariants({ layout, height, className })} {...props}>
      {children}
    </div>
  );
}
