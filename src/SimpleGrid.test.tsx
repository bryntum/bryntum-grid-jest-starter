import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleGrid from './SimpleGrid';

test('Renders Simple Grid', () => {
    render(<SimpleGrid />);
    expect(screen.getByText(/Grid Title/i)).toBeInTheDocument();
});