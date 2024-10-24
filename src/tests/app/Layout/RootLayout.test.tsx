import React from 'react'
import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'

describe('RootLayout', () => {
  it('renderiza o layout com os metadados corretos', () => {
    render(
      <RootLayout>
        <div>Conteúdo de Teste</div>
      </RootLayout>
    )

    expect(document.title).toBe('Acidente Zero')
    expect(
      document.querySelector('meta[name="description"]')?.getAttribute('content')
    ).toBe('Generated by create next app')
    expect(screen.getByText('Conteúdo de Teste')).toBeInTheDocument()
  })

  it('aplica metadados padrão quando não fornecidos', () => {
    render(
      <RootLayout>
        <div>Conteúdo Padrão</div>
      </RootLayout>
    )

    expect(document.title).toBe('Acidente Zero')
    expect(
      document.querySelector('meta[name="description"]')?.getAttribute('content')
    ).toBe('Generated by create next app')
    expect(screen.getByText('Conteúdo Padrão')).toBeInTheDocument()
  })
})