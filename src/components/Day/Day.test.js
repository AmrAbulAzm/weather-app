import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Day from '.';

it('Day renders without crashing', () => {
  const props = {
    data: [{
      main: { temp: 123 },
      weather: [{ main: 'sunny' }],
      dt_txt: '2017-02-17 15:00:00'
    }],
    city: 'Berlin',
    maxMin: { max: 321, min: 123 },
    weekDay: 'Friday',
    day: '13',
    month: 'October'
  }
  const { asFragment } = render(<Day {...props} />);
  expect(asFragment()).toMatchSnapshot();
});