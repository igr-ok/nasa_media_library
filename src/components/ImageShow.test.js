import { render, screen } from '@testing-library/react';
import ImageShow from './ImageShow';

test("renders", () => {

  render (<ImageShow />);
  
  screen.debug();
  
});