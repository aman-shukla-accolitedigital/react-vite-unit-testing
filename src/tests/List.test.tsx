import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import ListPage from '../components/ListPage';
describe('About Component', () => {

  it('renders the About component', () => {
    const { asFragment} = render(
      <ListPage />)
        // Find the input element
      expect(asFragment()).toMatchSnapshot();
      const inputElement = screen.getByRole('textbox');

      // Simulate typing into the input field
      fireEvent.change(inputElement, { target: { value: 'Item 4' } });
      fireEvent.click(screen.getByRole('button', { name: /add item/i }));
      expect(screen.getByText('Item 4')).toBeInTheDocument();
  })

})