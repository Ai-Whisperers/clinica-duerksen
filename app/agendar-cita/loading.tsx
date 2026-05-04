export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <div className="h-10 w-48 bg-muted rounded-lg animate-pulse" />

        {/* Step indicators skeleton */}
        <div className="flex justify-center gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-8 w-8 bg-muted rounded-full animate-pulse" />
              <div className="h-4 w-20 bg-muted rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Service selection skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-56 bg-muted rounded-lg animate-pulse" />
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="h-12 w-36 bg-muted rounded-full animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
