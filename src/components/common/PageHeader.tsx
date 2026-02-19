import { Loader2, RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";

type pageHeaderProps = {
  title: string;
  description: string;
  primary?: {
    title: string;
    action: () => void;
  };
  refresh?: {
    action: () => void;
    isLoading: boolean;
  };
};
const PageHeader = ({
  title,
  description,
  primary,
  refresh,
}: pageHeaderProps) => {
  return (
    <section className="w-full">
      <div className="my-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="capitalize text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <Button
            disabled={refresh?.isLoading}
            onClick={() => refresh?.action()}
            variant="outline"
            className="flex-1 sm:flex-none h-9 text-xs sm:text-sm"
          >
            {refresh?.isLoading ? (
              <Loader2 className="animate-spin mr-2 h-4 w-4" />
            ) : (
              <RefreshCcw className="mr-2 h-4 w-4" />
            )}
            Refresh
          </Button>
          <Button
            className="bg-primary hover:bg-primary/90 capitalize text-xs sm:text-sm h-9 flex-1 sm:flex-none"
            onClick={primary?.action}
          >
            {primary?.title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
