import { useQuery } from "@tanstack/react-query";
import type { WeatherData } from "../services/weatherData.type";
import { fetchWeatherData } from "../services/weather.query";

const useWeatherData = (location: string, apiKey: string) => {
  const { isLoading, data, refetch } = useQuery<WeatherData>({
    queryKey: ["weatherData"],
    queryFn: () => fetchWeatherData(location, apiKey),
    enabled: false,
  });

  return { isLoading, data, refetch };
};

export default useWeatherData;
