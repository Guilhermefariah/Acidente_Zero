import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 text-center font-serif py-2">
      <div className="container mx-auto">
        <p className="text-xl">&copy; {new Date().getFullYear()} Acidente Zero. Todos os direitos reservados.</p>
        <p className="text-xl">Contato: contato@acidente-zero.com</p>
      </div>
    </footer>
  );
};

export default Footer;
