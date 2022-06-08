import React, { useEffect, useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import Layout from './Layout'
import config from '../config'
import Weather from './Weather'
import DayPreview from './DayPreview'
import moment from 'moment'

export default function Home({ navigation }) {
  const [city, setCity] = useState('Gdańsk')
  const [data, setData] = useState({})
  const [forecast, setForecast] = useState(null)

  const onSubmit = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }

  useEffect(() => {
    navigation.setOptions({ title: data?.name || 'WeatherApp' })
  }, [data.name])

  useEffect(() => {
    onSubmit()
  }, [])

  useEffect(() => {
    if (data.coord)
      fetch(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setForecast(data)
        })
  }, [data.id])

  // console.log(data)
  // console.log(forecast)

  return (
    <Layout>
      <TextInput style={styles.input} onSubmitEditing={onSubmit} onChangeText={setCity} value={city} placeholder='Type in city...' />
      {data?.id && (
        <Weather
          icon={data.weather[0].icon}
          temp={data.main.temp}
          desc={data.weather[0].description}
          rows={[
            { value: Math.round(data.main.temp_min) + '°C', label: '⬇️ Min' },
            { value: Math.round(data.main.feels_like) + '°C', label: '🚹 Feels' },
            { value: Math.round(data.main.temp_max) + '°C', label: '⬆️ Max' },
            { value: data.main.humidity + '%', label: '💧 Humidity' },
            { value: (data.wind.speed * 3.6).toFixed(2), label: '💨 km/h' },
            { value: data.main.pressure, label: '💪 hPa' },
          ]}
        />
      )}
      {/* <View>
        <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
      </View> */}
      {/* <Text>{JSON.stringify(forecast)}</Text> */}
      {data?.id &&
        forecast?.daily?.length > 0 &&
        forecast.daily.map((day) => (
          <DayPreview
            navigation={navigation}
            key={day.dt}
            time={moment(day.dt * 1000).format('ddd')}
            data={day}
            temp1={day.temp.day}
            temp2={day.temp.night}
            icon={day.weather[0].icon}
            name={data.name}
            lat={data?.coord?.lat}
            lon={data?.coord?.lon}
            pressable
          />
        ))}
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 75,
    // borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    marginBottom: 25,
  },
})
