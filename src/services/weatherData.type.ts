export type WeatherData = {
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
};
