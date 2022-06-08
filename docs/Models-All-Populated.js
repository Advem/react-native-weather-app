// GET -> https://api.openweathermap.org/data/2.5/weather?q=Gda%C5%84sk&appid=2508abecb6d9037229e719a6adc445af
const WeatherNow = {
  coord: { lon: 18.6464, lat: 54.3521 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  base: "stations",
  main: { temp: 275.67, feels_like: 275.67, temp_min: 274.21, temp_max: 277.64, pressure: 1028, humidity: 68 },
  visibility: 10000,
  wind: { speed: 0.51, deg: 280 },
  clouds: { all: 0 },
  dt: 1651188238,
  sys: { type: 2, id: 2042574, country: "PL", sunrise: 1651201933, sunset: 1651255988 },
  timezone: 7200,
  id: 3099434,
  name: "Gdańsk",
  cod: 200,
};

// GET -> https://api.openweathermap.org/data/2.5/forecast?q=Gda%C5%84sk&appid=2508abecb6d9037229e719a6adc445af
const Forecast5Days = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1651579200,
      main: {
        temp: 282.49,
        feels_like: 279.67,
        temp_min: 282.49,
        temp_max: 282.49,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
      clouds: { all: 96 },
      wind: { speed: 5.67, deg: 14, gust: 6.26 },
      visibility: 10000,
      pop: 0.39,
      rain: { "3h": 0.43 },
      sys: { pod: "d" },
      dt_txt: "2022-05-03 12:00:00",
    },
  ],
  city: {
    id: 3099434,
    name: "Gdańsk",
    coord: { lat: 54.3521, lon: 18.6464 },
    country: "PL",
    population: 461865,
    timezone: 7200,
    sunrise: 1651201933,
    sunset: 1651255988,
  },
};
