import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SingleDay from './SingleDay';

const divideDataIntoDays = input => {
  return input.reduce((acc, value) => {
    const date = value.dt_txt.split(' ')[0]
    const key = acc[date]
    if (key) {
      key.push(value)
      return acc
    }
    key = [value]
    return acc
  }, {})
}

const calculateMaxAndMinimumPerDay = input => {
  const temperatures = input.map(i => Math.round(i.main.temp - 273.15))
  return {
    max: Math.max(...temperatures),
    min: Math.min(...temperatures)
  }
}

const returnWeekDay = date => {
  return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(date).getDay()]
}

const returnDay = date => {
  return date.split('-')[2]
}

const returnMonth = date => {
  return ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"][new Date(date).getMonth()]
}

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/weather-info')
    .then(response => response.json())
    .then(data => {
      data.type !== 'error'
      ? setData(data)
      : setError(data.message)
      setLoading(false)
    })
  }, []);

  if (loading) return <h1>Loading ...</h1>

  if (error) return <h1>{error}</h1>

  const firstFullDay = Object.values(divideDataIntoDays(data.list)).find(day => day.length === 8)
  const maxMin = calculateMaxAndMinimumPerDay(firstFullDay)
  const date = firstFullDay[0].dt_txt.split(' ')[0]

  return (
    <Container>
      <SingleDay
        data={firstFullDay}
        city={data.city.name}
        maxMin={maxMin}
        weekDay={returnWeekDay(date)}
        day={returnDay(date)}
        month={returnMonth(date)}
      />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

export default App;
