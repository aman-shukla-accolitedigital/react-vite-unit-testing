import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../components/Home';
describe('About Component', () => {

  it('renders the About component', () => {
    render(
      <Home />)
    expect(screen.getByText(/welcome to the home page!/i)).toBeInTheDocument();
  })

})