import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../components/About';
describe('About Component', () => {

  it('renders the About component', () => {
    render(
      <About />)
    
    expect(screen.getByText(/this is the about page\./i)).toBeInTheDocument();
  })

})