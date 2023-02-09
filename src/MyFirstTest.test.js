import { render } from '@testing-library/react';
import MyFirstTest from './MyFirstTest';

test('renders the component with the correct name passed as prop', () => {
    
  const { getByText } = render(<MyFirstTest name="John"/>);
  const textElement = getByText(/Hello John!/i);
  expect(textElement).toBeInTheDocument();

});
