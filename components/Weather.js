import React from 'react'
import styled from 'styled-components/native'

const Weather = ({ icon, temp, desc, rows }) => {
  return (
    <>
      <Outer>
        <Main>
          <Icon
            source={{
              uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
            }}
            resizeMode={'contain'}
          />
          <Temperature>
            {Math.round(temp)}
            <Celcius> °C</Celcius>
          </Temperature>
          <Description>{desc}</Description>
        </Main>
        {/* <Text>{JSON.stringify(data)}</Text> */}
      </Outer>
      <Outer>
        <Grid>
          {rows.map((row, id) => (
            <Row key={row.value + id}>
              <Value>{row.value}</Value>
              <Label>{row.label}</Label>
            </Row>
          ))}
        </Grid>
      </Outer>
    </>
  )
}

const Grid = styled.View`
  display: flex;
  flex-direction: row;
  padding: 37px 25px 0px;
  flex-wrap: wrap;
  background-color: #b9e2f9;
  border-radius: 10px;
  width: 100%;
`

const Row = styled.View`
  display: flex;
  width: 33.33%;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
`

const Label = styled.Text`
  display: flex;
  color: #004466;
`

const Value = styled.Text`
  display: flex;
  font-size: 25px;
  letter-spacing: -1px;
  color: #004466;
  font-weight: 700;
  margin-bottom: 5px;
`

const Outer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #80d4ff;
  border-radius: 10px;
  margin-bottom: 25px;
`

const Main = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 50px;
`

const Icon = styled.Image`
  width: 160px;
  height: 160px;
`

const Temperature = styled.Text`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 100px;
  margin-top: -30px;
  margin-left: 10px;
  font-weight: 700;
  letter-spacing: -10px;
  margin-bottom: 0px;
  color: #004466;
`

const Celcius = styled.Text`
  font-size: 25px;
  color: #0044664d;
  font-weight: 700;
  letter-spacing: -2px;
`

const Description = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  color: #00446680;
  letter-spacing: 2px;
`

export default Weather
