import React, { ChangeEventHandler, FormEvent, useState } from "react";
import styles from './widget.module.css';

import { WidgetInfo } from "../info/WidgetInfo"
import { TextField } from "../textField/TextField";
import { WeatherService } from "../../service/Weather.service";
import { Weather } from "../../models/weather";
import { Loader } from "../loader/Loader";

export const Widget: React.FC = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, isLoading] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLoading(true);
      const weather = await WeatherService.getWeather(search);

      if (!search) {
        setWeather(null);
        isLoading(false);
        return;
      }
  
      if (weather) {
        setWeather(weather);
        isLoading(false);
      }
  }

    return (
        <div className={styles.widget}>
        <form className={styles.widgetForm} onSubmit={handleSubmit}>
            <TextField 
                name="search" 
                placeholder="Введите название города" 
                value={search} 
                onChange={handleChange}
            />
          {loading ? <Loader /> : weather && (
            <>
               <h2 className={styles.widgetTitle}>{weather.name}</h2>
               <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="weather-icon" className={styles.widgetImage} />
               <WidgetInfo 
                  feels={weather.main.feels_like} 
                  temp={weather.main.temp} 
                  hum={weather.main.humidity}
                />
               <p className={styles.widgetDescription}>{weather.weather[0].description}</p>
            </>
          )}
          <button className={styles.widgetSubmit}>Отправить</button>
        </form>
      </div>
    )
}