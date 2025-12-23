function WeatherSkeleton() {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Current Weather */}
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="h-6 w-48 bg-gray-200 rounded" />
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 bg-gray-200 rounded-full" />
            <div className="space-y-2">
              <div className="h-8 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
  
        {/* Forecast sections */}
        <div className="grid gap-6 md:grid-cols-2">
          <HourlySkeleton />
          <div className="bg-white rounded-lg shadow p-4 space-y-3">
            <div className="h-5 w-32 bg-gray-200 rounded" />
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-10 bg-gray-200 rounded"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default WeatherSkeleton;
  