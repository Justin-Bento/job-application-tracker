type ExampleProps = {
  children?: React.ReactNode;
  className?: string; // Optional className
};

export default function Wrapper({ children, className = "" }: ExampleProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
