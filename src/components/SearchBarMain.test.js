import { render, screen } from '@testing-library/react';
import SearchBarMain from './SearchBarMain';

describe('SearchBarMain component', () => {
    it('SearchBarMain renders', () => {
      render(<SearchBarMain />);
  
      expect(screen.getByPlaceholderText(/Select start year../)).toBeInTheDocument();
    });
  });