import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface WeatherData {
  currentConditions: {
    temp: number;
    humidity: number;
    windspeed: number;
    conditions: string;
    icon: string;
  };
  days: Array<{
    datetime: string;
    tempmax: number;
    tempmin: number;
    conditions: string;
    icon: string;
  }>;
  address: string;
}
//const apiKey=process.env.API_KEY
const apiKey = import.meta.env.VITE_API_KEY;

const Weather = () => {
  const [location, setLocation] = useState<string>("Kathmandu");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [locationInput, setLocationInput] = useState<string>("");

  const { isPending, isLoading, data} = useQuery({
    queryKey: ["weatherData",location],
    queryFn: async () => {
      const res = await axios.get<WeatherData>(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
          location
        )}?unitGroup=metric&key=${apiKey}&contentType=json`
      );
      setWeatherData(res.data)
      return res.data
    },
  });

  
  if (isLoading||isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  const handleSearch=()=>{
    setLocation(locationInput)
    // queryClient.invalidateQueries(['weatherData'])
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex ">
          <input
            type="text"
            className="border-1 w-2/3 border-gray-300 rounded-xl p-2"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
          />
          <button
            className="border-1 px-2 py-1 rounded-2xl border-gray-300 ml-10 flex items-center justify-center space-x-2 font-semibold text-lg"
            onClick={handleSearch}
          >
            <CiSearch />
            <div className="">Search</div>
          </button>
        </div>
        <div className="text-center mb-8 mt-8">
          <h2 className="text-3xl font-bold mb-2">{weatherData.address}</h2>
          <div className="flex items-center justify-center">
            <img
              src={`/${weatherData.currentConditions.icon}.png`}
              alt={weatherData.currentConditions.conditions}
              className="w-24 h-24"
            />
            <div className="ml-4">
              <div className="text-5xl font-bold">
                {Math.round(weatherData.currentConditions.temp)}°C
              </div>
              <div className="text-gray-600">
                {weatherData.currentConditions.conditions}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-gray-600">
              <span className="font-semibold">Humidity:</span>{" "}
              {weatherData.currentConditions.humidity}%
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">Wind Speed:</span>{" "}
              {weatherData.currentConditions.windspeed} km/h
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {weatherData.days.slice(1, 7).map((day) => (
            <div
              key={day.datetime}
              className="bg-gray-50 rounded-lg p-4 text-center"
            >
              <div className="font-semibold mb-2">
                {new Date(day.datetime).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <img
                src={`/${day.icon}.png`}
                alt={day.conditions}
                className="w-16 h-16 mx-auto"
              />
              <div className="mt-2">
                <span className="font-semibold">
                  {Math.round(day.tempmax)}°
                </span>{" "}
                /{" "}
                <span className="text-gray-600">
                  {Math.round(day.tempmin)}°
                </span>
              </div>
              <div className="text-sm text-gray-600">{day.conditions}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
