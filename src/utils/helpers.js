import Clouds from '../assets/weather-cloud.svg';
import Clear from '../assets/weather-sun.svg';
import Rain from '../assets/weather-rain.svg';

const divideDataIntoDays = input => {
  return input.reduce((acc, value) => {
    const date = value.dt_txt.split(' ')[0];
    if (acc[date]) {
      acc[date].push(value);
      return acc;
    };
    acc[date] = [value];
    return acc;
  }, {});
};

const calculateMaxAndMinimumPerDay = input => {
  const temperatures = input.map(i => Math.round(i.main.temp - 273.15));
  return {
    max: Math.max(...temperatures),
    min: Math.min(...temperatures)
  };
};

const returnWeekDay = date => {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ][new Date(date).getDay()];
};

const returnDay = date => {
  return date.split('-')[2];
};

const returnMonth = date => {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ][new Date(date).getMonth()];
};

const Icon = {
  'Clear': Clear,
  'Rain': Rain,
  'Clouds': Clouds
};

export {
  divideDataIntoDays,
  calculateMaxAndMinimumPerDay,
  returnWeekDay,
  returnDay,
  returnMonth,
  Icon,
};