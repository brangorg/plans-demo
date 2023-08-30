import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const titleElement = screen.getByText(/Choice Aged Care/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders plans', () => {
  render(<App />);
  const titleElement = screen.getByText(/Plans/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders revenue calculator', () => {
  render(<App />);
  const titleElement = screen.getByText(/Revenue Calculator/i);
  expect(titleElement).toBeInTheDocument();
});
