import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  fullPage?: boolean;
}

const Loader = ({ className, size = "md", fullPage = false }: LoaderProps) => {
  const sizeClasses = {
    xs: "size-4 border-2",
    sm: "size-6 border-2",
    md: "size-8 border-[2.5px]",
    lg: "size-12 border-4",
  };

  const loaderContent = (
    <div
      className={cn(
        "animate-spin rounded-full border-slate-200/50 dark:border-slate-800/50 border-t-primary dark:border-t-primary shadow-[0_0_15px_rgba(19,127,236,0.15)]",
        sizeClasses[size],
      )}
    />
  );

  if (fullPage) {
    return (
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm",
          className,
        )}
      >
        {loaderContent}
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center justify-center", className)}>
      {loaderContent}
    </div>
  );
};

export default Loader;
