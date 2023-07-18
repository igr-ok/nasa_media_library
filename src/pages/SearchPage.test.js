import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPage from './SearchPage';

describe('SearchPage component', () => {
    it('SearchPage renders', () => {
      const {asFragment} = render(<SearchPage />);
  
      expect(asFragment(<SearchPage />)).toMatchSnapshot();
    });
  });