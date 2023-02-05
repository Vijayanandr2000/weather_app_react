import axios from 'axios';
import { weatherDeatils } from '../config';

export const getWeatherDeatils = async(location) => {
    return await axios(
        `${weatherDeatils.url}?q=${location}&appid=${weatherDeatils.apiKey}`
    );
}