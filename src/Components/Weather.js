import React, { useContext, useState } from 'react';
import { WeatherContext } from './WeatherContext';
import { getWeatherDeatils } from './api';
import './Weather.css';

const Weather = () => {
    const { 
        location, 
        setLocation, 
        weatherData, 
        setWeatherData, 
        error, 
        setError 
    } = useContext(WeatherContext);
    
    const [showWeather, setShowWeather] = useState(false);

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const result = await getWeatherDeatils(location.toLowerCase())
            setError('')
            let temperature = (( result.data.main.temp - 273.15)).toFixed(2);
            setWeatherData({
                ...result.data,
                temperature
            });
            setShowWeather(true);
            setLocation('')
        } catch (err) {
            setError(err);
            setShowWeather(false);
        }
    };

    // fetchData();

    let weatherClass = 'sunny';
    if (weatherData.weather) {
        const weather = weatherData.weather[0].main.toLowerCase();
        switch (weather) {
            case 'clouds':
                weatherClass = 'cloudy';
                break;
            case 'rain':
                weatherClass = 'rainy';
                break;
            case 'snow':
                weatherClass = 'snowy';
                break;
            default:
                weatherClass = 'sunny';
                break;
        }
    }

    return (
        <div className={`weather-container ${weatherClass}`}>
            <form>
                <label htmlFor="location">Enter City or Zip Code:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button id = "search-button" onClick={fetchData}>Search</button>
            </form>
            {error && location && <p className="error">No Weather details available for this location <span>{location}</span> </p>}
            {showWeather && weatherData.main && (
                <div className="weather-data">
                    <h3>{weatherData.name}</h3>
                    <p>Temperature: <span>{weatherData.temperature}°C</span> </p>
                    <p>Humidity: <span>{weatherData.main.humidity}%</span> </p>
                    <p>Wind Speed: <span>{weatherData.wind.speed}m/s</span> </p>
                    <p>Weather Conditions: <span>{weatherData.weather[0].description}</span> </p>
                </div>
            )}
        </div>
    );
};

export default Weather;