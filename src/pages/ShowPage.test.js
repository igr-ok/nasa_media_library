import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowPage from './ShowPage';

describe('ShowPage component', () => {
    it('ShowPage renders', () => {
      const {asFragment} = render(<ShowPage />);
  
      expect(asFragment(<ShowPage />)).toMatchSnapshot();
    });
  });