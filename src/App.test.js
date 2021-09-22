import { render, screen } from '@home-righting-library/react';
import App from './App';

home-right('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
