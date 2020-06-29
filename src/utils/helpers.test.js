import {
  divideDataIntoDays,
  calculateMaxAndMinimumPerDay,
  returnWeekDay,
  returnDay,
  returnMonth
} from './helpers';

describe('helpers', () => {
  it('divideDataIntoDays gets an array of weather objects and returns an object grouping them by day', () => {
    const data = [
      {dt_txt: 'day1 x'},
      {dt_txt: 'day1 x'},
      {dt_txt: 'day2 x'},
      {dt_txt: 'day2 x'},
      {dt_txt: 'day3 x'},
      {dt_txt: 'day3 x'}
    ];

    const expected = {
      day1: [{dt_txt: 'day1 x'}, {dt_txt: 'day1 x'}],
      day2: [{dt_txt: 'day2 x'}, {dt_txt: 'day2 x'}],
      day3: [{dt_txt: 'day3 x'}, {dt_txt: 'day3 x'}]
    };
    const actual = divideDataIntoDays(data);
    
    expect(expected).toEqual(actual);
  });

  it('calculateMaxAndMinimumPerDay gets an array of weather objects and returns an object with max and min temperatures', () => {
    const data = [{main:{temp: 276.455}}, {main:{temp: 274.455}}, {main:{temp: 278.455}}];

    const expected = { max: 5, min: 1 };
    const actual = calculateMaxAndMinimumPerDay(data);

    expect(expected).toEqual(actual);
  });

  it('returnWeekDay gets a date and returns which day of the week it is', () => {
    const date = '2017-12-12';

    const expected = 'Tuesday';
    const actual = returnWeekDay(date);

    expect(expected).toEqual(actual);
  });

  it('returnDay gets a date and returns which day of the month it is', () => {
    const date = '2017-12-12';

    const expected = '12';
    const actual = returnDay(date);

    expect(expected).toEqual(actual);
  });

  it('returnMonth gets a date and returns which month it is', () => {
    const date = '2017-12-12';

    const expected = 'December';
    const actual = returnMonth(date);

    expect(expected).toEqual(actual);
  });
});