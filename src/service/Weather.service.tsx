import axios from "axios";
import { WeatherResponse } from "../models/weather";

export const WeatherService = {
    async getWeather(cityName: string): Promise<WeatherResponse | undefined> {
        try {
            const { data } = await axios.get(
                  'https://api.openweathermap.org/data/2.5/weather',
                {
                  params: {
                    appid: '699abd7bdc958c4f820cfea1da62167e',
                    q: cityName,
                    lang: 'ru',
                    units: 'metric',
                  }
                }
            );
            return data;
        }
        catch (error) {
            console.log(error)
        }
    },
};