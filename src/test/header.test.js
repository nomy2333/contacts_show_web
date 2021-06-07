import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from "../components/header_footer/Header";
afterEach(cleanup);
it('should be enabled', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('button-1')).not.toHaveAttribute('disabled')
  });

  