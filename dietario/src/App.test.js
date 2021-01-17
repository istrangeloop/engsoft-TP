import { render, screen } from '@testing-library/react';
import App from './App';
import StartPage from './StartPage'
import { sum } from './utils.js'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//

test('teste de teste para o tdd', () => {
    render(<StartPage/>);
  const comp = screen.getByText(/Hello/i);
  expect(comp).toBeInTheDocument();
})

test('função avulsa', () => {
  expect(sum(2, 3)).toBe(5);
})
