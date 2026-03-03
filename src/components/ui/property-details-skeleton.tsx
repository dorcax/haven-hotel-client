import { Skeleton } from "@/components/ui/skeleton";

const PropertyDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb Skeleton */}
      <div className="flex gap-2 mb-6">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Title and Stats Skeleton */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
        <div className="space-y-2">
          <Skeleton className="h-10 w-64 md:w-96" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-10 w-24 rounded-lg" />
          <Skeleton className="h-10 w-24 rounded-lg" />
        </div>
      </div>

      {/* Gallery Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 mb-10 h-[300px] md:h-[450px] lg:h-[550px]">
        <Skeleton className="md:col-span-2 md:row-span-2 rounded-xl" />
        <Skeleton className="hidden md:block rounded-xl" />
        <Skeleton className="hidden md:block rounded-xl" />
        <Skeleton className="hidden md:block rounded-xl" />
        <Skeleton className="hidden md:block rounded-xl" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column Skeleton */}
        <div className="flex-1 space-y-12">
          <section className="flex items-center justify-between pb-8 border-b border-slate-100">
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-14 w-14 rounded-full" />
          </section>

          <section className="space-y-4">
            <Skeleton className="h-8 w-32" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </section>

          <section className="space-y-4">
            <Skeleton className="h-6 w-48" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-12 w-12 rounded-xl" />
                  <Skeleton className="h-6 w-32 self-center" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column Skeleton */}
        <aside className="w-full lg:w-[400px]">
          <Skeleton className="h-[400px] w-full rounded-3xl" />
        </aside>
      </div>
    </div>
  );
};

export default PropertyDetailsSkeleton;
