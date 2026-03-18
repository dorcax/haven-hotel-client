import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  fullPage?: boolean;
}

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("text-primary", className)}>
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6_330)">
        <path
          clipRule="evenodd"
          d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_330">
          <rect fill="white" height="48" width="48" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

const Loader = ({ className, size = "md", fullPage = false }: LoaderProps) => {
  const ringSizeClasses = {
    xs: "size-6",
    sm: "size-8",
    md: "size-10",
    lg: "size-14",
  };

  const logoSizeClasses = {
    xs: "size-3",
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const shouldShowLabel = fullPage || size === "md" || size === "lg";

  const wrapperClasses = fullPage
    ? "flex flex-col items-center justify-center gap-2"
    : "inline-flex items-center justify-center gap-2";

  const loaderContent = (
    <div className={cn(wrapperClasses, className)}>
      <div
        className={cn(
          "relative flex items-center justify-center",
          ringSizeClasses[size],
        )}
      >
        <span className="absolute inset-0 rounded-full border border-slate-200/50 border-t-primary animate-spin shadow-[0_0_18px_rgba(26,54,93,0.18)]" />
        <span className="relative flex items-center justify-center">
          <Logo className={logoSizeClasses[size]} />
        </span>
      </div>
      {shouldShowLabel ? (
        <span className="text-xs font-medium text-muted-foreground">
          Loading…
        </span>
      ) : null}
    </div>
  );

  if (fullPage) {
    return (
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm",
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
