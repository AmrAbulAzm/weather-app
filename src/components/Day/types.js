import { shape, string, number, bool, array, arrayOf, func } from 'prop-types'

const weatherItem = shape({
  dt: number,
  main: shape({
    temp: number.isRequired,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  }),
  weather: arrayOf(shape({
    id: number,
    main: string.isRequired,
    description: string,
    icon: string,
  })),
  clouds: shape({
    all: number
  }),
  wind: shape({
    speed: number,
    deg: number
  }),
  rain: shape({
    ['3h']: number
  }),
  sys: shape({
    pod: string
  }),
  dt_txt: string.isRequired
})

const DayProptypes = {
  data: arrayOf(weatherItem).isRequired,
  city: string.isRequired,
  maxMin: shape({
    max: number,
    min: number
  }).isRequired,
  weekDay: string.isRequired,
  day: string.isRequired,
  month: string.isRequired
}

const WeatherProptypes = {
  data: arrayOf(weatherItem).isRequired,
  current: weatherItem.isRequired,
  setCurrent: func.isRequired
}

const WeatherItemProptypes = {
  dayTime: string.isRequired,
  condition: string.isRequired,
  temperature: number.isRequired,
  selected: bool.isRequired,
  onClick: func.isRequired
}

export {
  DayProptypes,
  WeatherProptypes,
  WeatherItemProptypes
}