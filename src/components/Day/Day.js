import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Weather from './Weather'
import { Icon } from '../../utils/helpers';

const Day = ({ data, city, maxMin, weekDay, day, month }) => {
  const [current, setCurrent] = useState(data[0])

  useEffect(() => setCurrent(data[0]), [data])
  return (
    <Wrap>
      <header>
        
        <section>
          <img src={Icon[current.weather[0].main]} style={{ width: 220 }} /> 
        </section>

        <section>

          <ValuesContainer>
            <SubText>{current.weather[0].main}</SubText>
            <SubText>{`${maxMin.max}° / ${maxMin.min}°`}</SubText>
          </ValuesContainer>

          <Temperature>{`${Math.round(current.main.temp  - 273.15)}°`}</Temperature>

        </section>


        <LeftAlignedSection>

          <SubText style={{ marginBottom: 22 }}>{city}</SubText>

          <div>
            <DateInfo>{weekDay}</DateInfo>
            <DateInfo>{`${day}. ${month}`}</DateInfo>
          </div>
        </LeftAlignedSection>
        

      </header>

      <Weather data={data} current={current} setCurrent={setCurrent} />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
      
      > section {
        width: 90%;
      }
    }
  }
`;

const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  width: 298px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const LeftAlignedSection = styled.section`
  text-align: left;
`


const SubText = styled.p`
  font-size: 32px;
  color: #A8AABD;
  margin: 0;
`

const Temperature = styled.h1`
  font-size: 165px;
  color: white;
  margin: 0;
`

const DateInfo = styled.h2`
  font-size: 66px;
  color: white;
  margin: 15px 0px;
`

export default Day;