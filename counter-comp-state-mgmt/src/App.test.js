import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import Counter from './Counter';

jest.useFakeTimers();

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Normal test cases

test('initial render shows count as 0', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('clicking Increment button increases count by 1', () => {
  render(<Counter />);
  const buttons = screen.getAllByRole('button', { name: /Increment/i });
  const incrementButton = buttons.find(button => button.textContent === 'Increment');
  fireEvent.click(incrementButton);
  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
});

test('clicking Correct Increment Twice button increases count by 2', () => {
  render(<Counter />);
  const button = screen.getByText(/Correct Increment Twice/i);
  fireEvent.click(button);
  const countElement = screen.getByText(/Count: 2/i);
  expect(countElement).toBeInTheDocument();
});

// Edge test cases

test('clicking Increment After Delay button increases count by 1 after 2 seconds', () => {
  render(<Counter />);
  const button = screen.getByText(/Increment After Delay/i);
  fireEvent.click(button);
  act(() => {
    jest.advanceTimersByTime(2000);
  });
  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
});

test('clicking Increment Twice button does not increase count by 4', () => {
  render(<Counter />);
  const buttons = screen.getAllByRole('button', { name: /Increment Twice/i });
  const incrementTwiceButton = buttons.find(button => button.textContent === 'Increment Twice');
  fireEvent.click(incrementTwiceButton);
  const countElement = screen.getByText(/Count: 2/i);
  expect(countElement).toBeInTheDocument();
});

test('clicking Correct Increment Twice button twice updates count correctly', () => {
  render(<Counter />);
  const button = screen.getByText(/Correct Increment Twice/i);
  fireEvent.click(button);
  fireEvent.click(button);
  const countElement = screen.getByText(/Count: 4/i);
  expect(countElement).toBeInTheDocument();
});
