import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
    return (
        <nav className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li>
                    <Link href="/" className="text-gray-600 font-serif hover:text-gray-900">Início</Link>
                </li>
                <li>
                    <Link href="/about" className="text-gray-600 font-serif hover:text-gray-900">Sobre</Link>
                </li>
                <li>
                    <Link href="/report" className="text-gray-600 font-serif hover:text-gray-900">Relatar</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-gray-600 font-serif hover:text-gray-900">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
