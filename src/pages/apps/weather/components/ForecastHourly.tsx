import { type WeatherData } from "../services/WeatherService";

const smartSymbolMapping: {[key:string]: string} = {
  "1": "Clear",
  "2": "Mostly clear",
  "4": "Partly cloudy",
  "6": "Mostly cloudy",
  "7": "Overcast",
  "9": "Fog",

  "11": "Drizzle",
  "14": "Freezing drizzle",
  "17": "Freezing rain",

  "21": "Isolated showers",
  "24": "Scattered showers",
  "27": "Showers",

  "31": "Partly cloudy and periods of light rain",
  "32": "Partly cloudy and periods of moderate rain",
  "33": "Partly cloudy and periods of heavy rain",
  "36": "Mostly cloudy and periods of heavy rain",

  "37": "Light rain",
  "38": "Moderate rain",
  "39": "Heavy rain",

  "41": "Isolated light sleet showers",
  "42": "Isolated moderate sleet showers",
  "43": "Isolated heavy sleet showers",

  "44": "Scattered light sleet showers",
  "45": "Scattered moderate sleet showers",
  "46": "Scattered heavy sleet showers",

  "47": "Light sleet",
  "48": "Moderate sleet",
  "49": "Heavy sleet",

  "51": "Isolated light snow showers",
  "52": "Isolated moderate snow showers",
  "53": "Isolated heavy snow showers",

  "54": "Scattered light snow showers",
  "55": "Scattered moderate snow showers",
  "56": "Scattered heavy snow showers",

  "57": "Light snowfall",
  "58": "Moderate snowfall",
  "59": "Heavy snowfall",

  "61": "Isolated hail showers",
  "64": "Scattered hail showers",
  "67": "Hail showers",

  "71": "Isolated thundershowers",
  "74": "Scattered thundershowers",
  "77": "Thundershowers"
}

interface ForecastHourlyProps {
  weatherData: WeatherData[],
  region: string
}

const ForecastHourly: React.FC<ForecastHourlyProps> = ({weatherData, region}) => {

    if (!weatherData || weatherData.length === 0) return null;
  
    // console.log("Rendering ForecastHourly with data:", weatherData);
    return (
      <section className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Hourly Forecast
        </h2>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {region.charAt(0).toUpperCase() + region.slice(1).toLowerCase()}
        </h3>
  
        <div className="flex gap-4 overflow-x-auto pb-2">
          {weatherData.map((weatherEntry, index) => (
            <div
              key={weatherEntry.time}
              className="flex-shrink-0 w-12 text-center mb-2"
            >
              {/* Date */}
              <p className="text-sm text-gray-500 min-h-5">
                {index === 0 || (index > 0 && new Date(weatherEntry.time)?.getDate() !== new Date(weatherData[index - 1]?.time ?? 0).getDate())
                  ? new Date(weatherEntry.time).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    })
                  :""
              }
              </p>

              {/* Time */}
              <p className="text-sm text-gray-500">
                {/* {new Date(weatherEntry.time).getHours()}:00 */}
                {new Date(weatherEntry.time).toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })}
              </p>

              {/* Symbol */}
              <img
                src={`/src/assets/symbols/SmartSymbol/light/${weatherEntry.smartSymbol}.svg`}
                alt={`Weather symbol for ${weatherEntry.smartSymbol}`}
                title={parseInt(weatherEntry?.smartSymbol ?? "") > 100 
                  ? smartSymbolMapping[parseInt(weatherEntry?.smartSymbol ?? "")-100] 
                  : smartSymbolMapping[parseInt(weatherEntry?.smartSymbol ?? "")]
                }
                className="mx-auto h-10 w-10"
              />
  
              {/* <img
                src={weatherEntry.icon}
                alt={weatherEntry.description}
                className="mx-auto h-10 w-10"
              /> */}
  
              <p className="font-medium text-gray-900">
                {weatherEntry.temperature}°C
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default ForecastHourly;
  