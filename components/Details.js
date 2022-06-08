import { useEffect, useState } from 'react'
import Layout from './Layout'
import moment from 'moment'
import Weather from './Weather'
import config from '../config'
import DayPreview from './DayPreview'

const getMoon = (v) => {
  if (v >= 0 && v < 0.1) return '🌚'
  if (v >= 0.1 && v < 0.2) return '🌒'
  if (v >= 0.2 && v < 0.3) return '🌓'
  if (v >= 0.3 && v < 0.4) return '🌔'
  if (v >= 0.4 && v < 0.5) return '🌕'
  if (v >= 0.5 && v < 0.6) return '🌕'
  if (v > 0.6 && v < 0.7) return '🌖'
  if (v >= 0.7 && v < 0.8) return '🌗'
  if (v >= 0.8 && v < 0.9) return '🌘'
  if (v >= 0.9 && v <= 1) return '🌚'
}

export default function Details({ route, navigation }) {
  const { data, name, lat, lon } = route.params
  const [hourly, setHourly] = useState({})

  const date = moment(data.dt * 1000).format('YYYY-MM-DD')

  useEffect(() => {
    navigation.setOptions({ title: name + ' - ' + moment(data.dt * 1000).format('ddd, D MMMM YYYY') })
  }, [name])

  useEffect(() => {
    if (lat && lon)
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${config.API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setHourly(data)
        })
  }, [lat, lon])

  // console.log(hourly)

  return (
    <Layout>
      {data && (
        <Weather
          icon={data.weather[0].icon}
          temp={data.temp.day}
          desc={data.weather[0].description}
          rows={[
            { value: data.humidity + '%', label: '💧 Humidity' },
            { value: (data.rain || '0') + '%', label: '☔ Rain' },
            { value: data.clouds + '%', label: '☁️ Clouds' },

            { value: data.wind_speed.toFixed(0) + ' ㎧', label: '💨 Wind Speed ' },
            { value: data.wind_deg + '°', label: '💨 Wind Deg' },
            { value: data.pressure, label: '💪 hPa' },

            { value: moment(data.sunrise * 1000).format('HH:mm'), label: '🌅 Sunrise' },
            { value: moment(data.sunset * 1000).format('HH:mm'), label: '🌇 Sunset' },
            { value: (data.moon_phase * 100).toFixed(0) + '%', label: `${getMoon(data.moon_phase)} Moon` },
          ]}
        />
      )}
      {hourly &&
        hourly.list
          ?.filter((item) => item.dt_txt.includes(date))
          ?.map((item) => (
            <DayPreview
              key={item.dt}
              temp1={item.main.temp}
              hum={item.main.humidity}
              time={moment(item.dt * 1000).format('HH:mm')}
              icon={item.weather[0].icon}
            />
          ))}
    </Layout>
  )
}
