function ForecastHourly({hours, region}) {

    if (!hours || hours.length === 0) return null;
  
    return (
      <section className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Hourly Forecast
        </h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {region.charAt(0).toUpperCase() + region.slice(1).toLowerCase()}
        </h3>
  
        <div className="flex gap-4 overflow-x-auto pb-2">
          {hours.map((hour) => (
            <div
              key={hour.time}
              className="flex-shrink-0 w-24 text-center"
            >
              <p className="text-sm text-gray-500">
                {new Date(hour.time).getHours()}:00
              </p>
  
              {/* <img
                src={hour.icon}
                alt={hour.description}
                className="mx-auto h-10 w-10"
              /> */}
  
              <p className="text-lg font-medium text-gray-900">
                {hour.temperature}°C
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default ForecastHourly;
  