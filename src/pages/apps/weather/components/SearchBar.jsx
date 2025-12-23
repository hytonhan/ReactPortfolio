import {useState, useEffect} from 'react';
import {fetchWeatherByCity} from '../services/WeatherService';

function SearchBar({onSearch}) {
    const [region, setRegion] = useState('tampere');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(region); // Pass the user input to the parent component
        }
    };

    // useEffect(() => {
    //     fetchWeatherByCity(region);
    // }, [region])

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex items-center gap-2 bg-white p-4 rounded-lg shadow' >

                <label htmlFor="city-search" className="sr-only">
                    Search city
                </label>

                <input id="city-search" type="text" placeholder="Search city..."
                    value={region} onChange={(e) => setRegion(e.target.value)}
                    className="flex-1 rounded-md border border-gray-300 px-4 py-2
               focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800
               w-full sm:w-auto"
                />
                < button
                    type="submit"
                    className="
                    rounded-md bg-blue-600 px-4 py-2 text-white
                    hover:bg-blue-700 transition
                    "
                >
                Search
            </button>
          </form>
        </div>
    )
}

export default SearchBar;