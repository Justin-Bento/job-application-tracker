import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define props (extending HTMLDivElement attributes)
type WrapperProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof WrapperVariants>;

const WrapperVariants = cva("", {
  variants: {
    layout: {
      fullWidthMobile: "mx-auto max-w-7xl sm:px-6 lg:px-8",
      constrained: "container mx-auto px-4 sm:px-6 lg:px-8",
    },
    height: {
      fullHeight: "min-h-dvh",
    },
  },
});

export default function Wrapper({
  children,
  className,
  layout,
  height,
}: WrapperProps) {
  return (
    <div className={WrapperVariants({ layout, height, className })} {...props}>
      {children}
    </div>
  );
}
