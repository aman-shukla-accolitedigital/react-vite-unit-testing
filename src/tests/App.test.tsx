import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'
import { MemoryRouter } from 'react-router-dom';
describe('App component', () => {

  it('renders the App component', () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>)
    
      // Check if navigation links are rendered
    expect(screen.getByRole('link', { name: /list/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /list/i })).toBeInTheDocument();

  })

  it('renders the Home component while navigating', () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>)
    
    const link = screen.getByRole('link', {
      name: /home/i
    });
    fireEvent.click(link);

    expect(screen.getByText(/welcome to the home page!/i)).toBeInTheDocument();
  })
})