import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-400 text-gray-800 text-center font-serif py-2">
      <div className="container mx-auto">
        <p className="text-xl">&copy; {currentYear} Acidente Zero. Todos os direitos reservados.</p>
        <p className="text-xl">Contato: <a href="mailto:contato@acidente-zero.com" className="hover:underline">contato@acidente-zero.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
