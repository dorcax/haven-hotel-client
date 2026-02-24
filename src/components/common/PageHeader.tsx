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
      <div className="my-5 flex justify-between items-center">
        <div>
          <h1 className="capitalize text-2xl font-semibold text-gray-700">
            {title}
          </h1>
          {description && <p>{description}</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            disabled={refresh?.isLoading}
            onClick={() => refresh?.action()}
            variant="outline"
            className=""
          >
            Refresh {refresh?.isLoading ? <Loader2 /> : <RefreshCcw />}{" "}
          </Button>
        {primary?.title ?  <Button
            className="bg-primary hover:bg-primary/90 capitalize text-sm"
            onClick={primary?.action}
          >
            {primary?.title}
          </Button>:""}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
