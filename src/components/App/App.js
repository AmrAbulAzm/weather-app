import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Day from '../Day';
import Loader from './Loader';
import {
  divideDataIntoDays,
  calculateMaxAndMinimumPerDay,
  returnWeekDay,
  returnDay,
  returnMonth
} from '../../utils/helpers';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [counter, setCounter] = useState(0)

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

  if (loading) return <Loader />

  if (error) return <Error>{error}</Error>

  const dataInDays = divideDataIntoDays(data.list)
  const firstFullDay = Object.values(dataInDays)[counter]
  const maxMin = calculateMaxAndMinimumPerDay(firstFullDay)
  const date = firstFullDay[0].dt_txt.split(' ')[0]
  const weekDay = returnWeekDay(date)
  const day = returnDay(date)
  const month = returnMonth(date)

  return (
    <Container>
      <ArrowContainer>
      {counter > 0 &&
        <LeftArrow onClick={() => setCounter(counter - 1)} />
      }
      {counter < Object.values(dataInDays).length - 1  &&
        <RightArrow onClick={() => setCounter(counter + 1)} />
      }
      </ArrowContainer>
      <Day
        data={firstFullDay}
        city={data.city.name}
        maxMin={maxMin}
        weekDay={weekDay}
        day={day}
        month={month}
      />
    </Container>
  );
}

const Error = styled.h1`
  font-size: 40px;
  color: red;
  text-align: center;
`;

const ArrowContainer = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`

const Arrow = css`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

const RightArrow = styled.div`
  ${Arrow}
  transform: rotate(-45deg);
  float: right;
`

const LeftArrow = styled.div`
  ${Arrow}
  transform: rotate(135deg);
  float: left;
`

const Container = styled.div`
  text-align: center;
`;

export default App;
