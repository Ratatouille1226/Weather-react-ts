import React, { ChangeEventHandler, useState } from "react";
import styles from './widget.module.css';

import { WidgetInfo } from "../info/WidgetInfo"
import { TextField } from "../textField/TextField";

export const Widget: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  }

    return (
        <div className={styles.widget}>
        <form className={styles.widgetForm}>
            <TextField 
                name="search" 
                placeholder="Введите название города" 
                value={search} 
                onChange={handleChange}
            />
          <h2 className={styles.widgetTitle}>Заголовок</h2>
          <img src="" alt="weather-icon" className={styles.widgetImage} />
            <WidgetInfo feels={25} temp={20} hum={10}/>
          <p className={styles.widgetDescription}>Описание погоды</p>
          <button className={styles.widgetSubmit}>Отправить</button>
        </form>
      </div>
    )
}