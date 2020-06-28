import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../../utils/helpers';

const WeatherItem = ({ dayTime, condition, temperature, selected, onClick }) => (
  <WeatherItemButton selected={selected} onClick={onClick}>
    <SubText>{dayTime}</SubText>
    <img src={Icon[condition]} style={{ width: 80, margin: '10px 0px' }} /> 
    <SmallTemperature>{`${temperature}°`}</SmallTemperature>
  </WeatherItemButton>
)

const WeatherItemButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  border: none;
  background: none;
  outline: none;
  ${props => props.selected && css`
    border-radius: 6px;
    background-color: #51557A;
  `}
`;

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

const SmallTemperature = styled.h3`
  font-size: 55px;
  color: white;
  margin: 0px;
`

export default WeatherItem;