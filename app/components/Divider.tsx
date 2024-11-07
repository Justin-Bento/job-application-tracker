import React from "react";

interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return <div className={`h-1 rounded-full bg-black mt-4 ${className}`}></div>;
}
