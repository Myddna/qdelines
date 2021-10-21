import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ControlForm from './ControlForm';

describe('<ControlForm />', () => {
  test('it should mount', () => {
    render(<ControlForm />);
    
    const controlForm = screen.getByTestId('ControlForm');

    expect(controlForm).toBeInTheDocument();
  });
});