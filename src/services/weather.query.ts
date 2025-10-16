import axios from "axios";
import type { WeatherData } from "./weatherData.type";

export const fetchWeatherData = async (location: string, apiKey: string) => {
  const res = await axios.get<WeatherData>(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      location,
    )}?unitGroup=metric&key=${apiKey}&contentType=json`,
  );
  // setWeatherData(res.data)
  return res.data;
};
