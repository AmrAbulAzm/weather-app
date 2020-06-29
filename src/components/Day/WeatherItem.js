import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../../utils/helpers';
import { WeatherItemProptypes } from './types';

const WeatherItem = ({
  dayTime,
  condition,
  temperature,
  selected,
  onClick
}) => (
  <WeatherItemButton selected={selected} onClick={onClick}>
    <SubText>{dayTime}</SubText>
    <Image src={Icon[condition]} alt={'smallWeatherIcon'} /> 
    <SmallTemperature>{`${temperature}°`}</SmallTemperature>
  </WeatherItemButton>
);

WeatherItem.propTypes = WeatherItemProptypes;

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

const Image = styled.img`
  width: 80px;
  margin: 10px 0px;
`;

const SubText = styled.p`
  font-size: 32px;
  color: #A8AABD;
  margin: 0px;
`;

const SmallTemperature = styled.h3`
  font-size: 55px;
  color: white;
  margin: 0px;
`;

export default WeatherItem;