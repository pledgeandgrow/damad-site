import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Skeleton */}
      <div className="mb-12 text-center">
        <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
      </div>
      
      {/* Filters Skeleton */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-10 w-32 rounded-full" />
        ))}
      </div>
      
      {/* Projects Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
            <Skeleton className="h-48 w-full" />
            <div className="p-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-4 w-5/6 mb-6" />
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Skeleton className="h-4 w-1/2 mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div>
                  <Skeleton className="h-4 w-1/2 mb-1" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
              
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
