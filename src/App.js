import React from 'react';
import Weather from './Components/Weather';
import { WeatherProvider } from './Components/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  );
}

export default App;