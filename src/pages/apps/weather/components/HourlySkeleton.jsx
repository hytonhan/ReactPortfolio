function HourlySkeleton() {
    return (
      <section className="bg-white rounded-lg shadow p-4 animate-pulse">
        <div className="h-5 w-32 bg-gray-200 rounded mb-4" />
  
        <div className="flex gap-4 overflow-x-auto">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 text-center space-y-2"
            >
              <div className="h-4 w-16 bg-gray-200 rounded mx-auto" />
              <div className="h-10 w-10 bg-gray-200 rounded-full mx-auto" />
              <div className="h-5 w-10 bg-gray-200 rounded mx-auto" />
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default HourlySkeleton;
  