import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LineSet from './LineSet';

describe('<LineSet />', () => {
  test('it should mount', () => {
    render(<LineSet />);
    
    const lineSet = screen.getByTestId('LineSet');

    expect(lineSet).toBeInTheDocument();
  });
});