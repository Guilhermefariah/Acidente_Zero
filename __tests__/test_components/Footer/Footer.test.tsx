import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer/Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Footer />);
    
    // Verificar se o ano atual está presente
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Acidente Zero. Todos os direitos reservados.`)).toBeInTheDocument();

    // Verificar se o email de contato está presente e com o link correto
    const emailLink = screen.getByText('contato@acidente-zero.com');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:contato@acidente-zero.com');
  });
});
