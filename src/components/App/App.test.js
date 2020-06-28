import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '.';

it('App renders without crashing', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
