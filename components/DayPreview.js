import React from 'react'
import styled from 'styled-components/native'

const DayPreview = ({ navigation, time, temp1, temp2, hum, icon, data, name, pressable, lat, lon }) => {
  return (
    <Container
      onPress={() => {
        if (!pressable) return null
        /* 1. Navigate to the Details route with params */
        navigation.navigate('Details', {
          name,
          data,
          lat,
          lon,
        })
      }}
    >
      <DayName>{time}</DayName>
      <Temperature>
        {Math.round(temp1)}°C
        {temp2 && <TempNight> | {Math.round(temp2)}°C</TempNight>}
        {hum && <Hum> 💧{Math.round(hum)}%</Hum>}
      </Temperature>
      <Icon
        source={{
          uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
        }}
        resizeMode={'contain'}
      />
    </Container>
  )
}

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  padding: 5px 25px;
  background-color: #d7ebf5;
  margin-bottom: 12px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`

const DayName = styled.Text`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #004466;
`

const Icon = styled.Image`
  width: 60px;
  height: 60px;
`

const Temperature = styled.Text`
  font-size: 25px;
  color: #00446699;
`

const TempNight = styled.Text`
  color: #0044664d;
  font-size: 20px;
`

const Hum = styled.Text`
  color: #0044664d;
  font-size: 15px;
  padding-left: 5px;
`

export default DayPreview
