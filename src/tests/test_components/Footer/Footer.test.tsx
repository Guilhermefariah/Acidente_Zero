import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/(accidentzero)/Footer'
import '@testing-library/jest-dom/extend-expect'

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Footer />)
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Acidente Zero. Todos os direitos reservados.`)).toBeInTheDocument()

    const emailLink = screen.getByText('contato@acidente-zero.com')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:contato@acidente-zero.com')
  })
})
