import { cn } from "@/lib/utils"; // Standard Shadcn utility

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

const GridContainer = ({ children, className }: GridContainerProps) => {
  return (
    <div
      className={cn(
        "px-5",
        "sm:col-span-4 sm:grid sm:grid-cols-4 sm:gap-5",
        "lg:col-start-2 lg:col-span-11 lg:grid-cols-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default GridContainer;
