import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IntroHero from './IntroHero';

describe('<IntroHero />', () => {
  test('it should mount', () => {
    render(<IntroHero />);
    
    const introHero = screen.getByTestId('IntroHero');

    expect(introHero).toBeInTheDocument();
  });
});