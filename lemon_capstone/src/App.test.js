import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00']);
});

test('renders Little Lemon heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', {
    level: 1,
    name: /little lemon/i,
  });
  expect(headingElement).toBeInTheDocument();
});
