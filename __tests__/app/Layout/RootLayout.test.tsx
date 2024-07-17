// tests/app/Layout/RootLayout.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';

describe('RootLayout', () => {
  it('renderiza o layout com os metadados corretos', () => {
    // Renderizando o componente RootLayout com conteúdo de teste
    render(
      <RootLayout>
        <div>Conteúdo de Teste</div>
      </RootLayout>
    );

    // Verificando se os metadados estão sendo aplicados corretamente
    expect(document.title).toBe('Acidente Zero');
    expect(
      document.querySelector('meta[name="description"]')?.getAttribute('content')
    ).toBe('Generated by create next app');
    expect(screen.getByText('Conteúdo de Teste')).toBeInTheDocument();
  });

  it('aplica metadados padrão quando não fornecidos', () => {
    // Limpando o mock para este teste específico
    render(
      <RootLayout>
        <div>Conteúdo Padrão</div>
      </RootLayout>
    );

    // Verificando se os metadados padrão estão sendo aplicados
    expect(document.title).toBe('Acidente Zero');
    expect(
      document.querySelector('meta[name="description"]')?.getAttribute('content')
    ).toBe('Generated by create next app');
    expect(screen.getByText('Conteúdo Padrão')).toBeInTheDocument();
  });
});
