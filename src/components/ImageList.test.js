import { render, screen } from '@testing-library/react';
import ImageList from './ImageList';

describe('ImageList', () => {
  test('renders component', () => {
    render(<ImageList />);
    const component = document.querySelector('.image-list');
    
    expect(component).toBeInTheDocument();
  });
});