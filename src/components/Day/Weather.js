import React from 'react';
import styled from 'styled-components';
import WeatherItem from './WeatherItem';
import { WeatherProptypes } from './types';

const Weather = ({ data, current, setCurrent }) => (
  <Wrap>
    {data.map(el => {
      const temperature = Math.round(el.main.temp - 273.15)
      const condition = el.weather[0].main
      const time = el.dt_txt.split(' ')[1]
      const formattedTime = time.substring(0, time.length - 3)
      const selected = el.dt_txt === current.dt_txt ? true : false;
      return (
        <WeatherItem
          key={el.dt_txt}
          dayTime={formattedTime}
          condition={condition}
          temperature={temperature}
          selected={selected}
          onClick={() => setCurrent(el)}
        />
      )
    })}
  </Wrap>
)

Weather.propTypes = WeatherProptypes;

const Wrap = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: scroll;
`;

export default Weather;