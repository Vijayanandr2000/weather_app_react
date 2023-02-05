import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        weatherData,
        setWeatherData,
        error,
        setError,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
