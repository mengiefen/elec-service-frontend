import React, { useEffect, useState } from 'react';
import styles, { dateNames, light, dark } from './dateTimeConstants';

const DateTime = () => {
  const [date, setDate] = useState({
    dayName: new Date().toLocaleString('en-us', { weekday: 'long' }),
    hour: String(new Date().getHours()),
    minute: String(new Date().getMinutes()),
    second: String(new Date().getSeconds()),
    ampm: new Date().getHours() >= 12 ? 'PM' : 'PM',
  });

  const [darkMode, setDarkMode] = useState(false);

  const appendZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const formatHour = (hour: number): string => {
    hour > 12 ? hour - 12 : hour;
    return appendZero(hour);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate({
        ...date,
        hour: formatHour(new Date().getHours()),
        minute: appendZero(new Date().getMinutes()),
        second: appendZero(new Date().getSeconds()),
        ampm: new Date().getHours() >= 12 ? 'PM' : 'AM',
      });
    }, 1000);
    return () => clearInterval(interval);
  });

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={styles.container}>
      <button onClick={changeTheme} className={styles.btn}>
        CHANGE THEME
      </button>
      <div className={darkMode ? dark.wrapper : light.wrapper}>
        <div className={darkMode ? dark.display : light.display}>
          <div className="flex gap-2 self-center">
            {dateNames.map((dateName) => {
              return (
                <span
                  key={dateName}
                  className="block text-[8px] uppercase"
                  style={
                    date.dayName === dateName
                      ? { color: 'red' }
                      : { color: darkMode ? 'white' : 'black' }
                  }
                >
                  {dateName.slice(0, 3)}
                </span>
              );
            })}
          </div>
          <div className={styles.dateWrapper}>
            <span className={styles.date}>
              <span className="w-[55px] overflow-hidden text-center">
                {date.hour}:
              </span>
              <span className="w-[55px] overflow-hidden text-center">
                {date.minute}:
              </span>
              <span className="w-[55px] overflow-hidden text-center">
                {date.second}
              </span>
            </span>
            <span className="block text-[10px]">{date.ampm}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
