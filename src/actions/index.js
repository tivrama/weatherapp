import axios from 'axios';

const KEY = 'f6b4e0af94ea86bd430741b441c487bb';
const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${KEY}`;

export const GET_WEATHER = 'GET_WEATHER';

export function fetchWeather(zip) {
  const url = `${URL}&q=${zip},us`;
  const request = axios.get(url);

  return {
    type: GET_WEATHER,
    payload: request
  };
}
