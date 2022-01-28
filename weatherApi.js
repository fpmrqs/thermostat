import { got } from 'got';
import 'dotenv/config'

class WeatherApi {
  constructor(city) {
    this.apiKey = process.env.WEATHER_API_KEY;
    this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`
  }

  fetchWeatherData() {
    let weatherData = null;

    got(this.apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      console.log(weatherData);
    })
  }
}

const weather = new WeatherApi("London");
weather.fetchWeatherData();