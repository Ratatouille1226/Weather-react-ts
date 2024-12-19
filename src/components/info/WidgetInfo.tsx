import React from "react";
import styles from './widgetInfo.module.css';

interface inProps {
    feels: number,
    temp: number,
    hum: number
}

export const WidgetInfo: React.FC<inProps> = ({feels, temp, hum}) => {

    return (
        <div className={styles.widgetInfo}>
            <div className={styles.widgetInfoFeels}>
                <span>Чувствуется как</span>
                <span>{feels} &deg;C</span>
            </div>
            <div className={styles.widgetInfoTemp}>
                <span>Температура</span>
                <span>{temp} &deg;C</span>
            </div>
            <div className={styles.widgetInfoHum}>
                <span>Влажность</span>
                <span>{hum} %</span>
            </div>
      </div>
    )
}