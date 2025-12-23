import SearchBar from "../components/SearchBar"
import { useState, useEffect } from 'react';
import {fetchWeatherByCity} from "../services/WeatherService";
import ForecastHourly from "../components/ForecastHourly";
import HourlySkeleton from "../components/HourlySkeleton";
import WeatherSkeleton from "../components/WeatherSkeleton";

function Weather() {

    const [loading, setLoading] = useState(false);
    const [regionToSearch, setRegionToSearch] = useState('');
    const [weatherData, setWeatherData] = useState([]);

    const handleSearch = (region) => {
        console.log("Searching weather for:", region);
        setRegionToSearch(region);
    }

    useEffect(() => {
        if (regionToSearch) {
            setLoading(true);
            fetchWeatherByCity(regionToSearch)
                .then((data) => {
                    console.log("Fetched weather data:", data);
                    setWeatherData(data);
                })
                .catch((error) => {
                    console.error("Error fetching weather data:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [regionToSearch]);

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-8">WeatherApp</h1>
            <SearchBar onSearch={handleSearch}/>

            {loading ? <HourlySkeleton /> : <ForecastHourly hours={weatherData} region={regionToSearch}/>}

        </div>
    )
}


export default Weather;