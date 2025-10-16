import { useQuery } from "@tanstack/react-query";
import type { WeatherData } from "../services/weatherData.type";
import { fetchWeatherData } from "../services/weather.query";

const useWeatherData = (location: string, apiKey: string) => {
  const { isLoading, data } = useQuery<WeatherData>({
    queryKey: ["weatherData", location],
    queryFn: () => fetchWeatherData(location, apiKey),
  });

  return { isLoading, data };
};

export default useWeatherData;
