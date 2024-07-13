import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const clickMenu  = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
            <div className="md:hidden flex justify-end w-full p-2">
                <button onClick={clickMenu}>
                    {isOpen ? (
                        <Image src="/img/close.png" alt="Close Menu" width={15} height={15} />
                    ) : (
                        <Image src="/img/menu.png" alt="Open Menu" width={25} height={25} />
                    )}
                </button>
            </div>
            <ul className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                <li>
                    <Link href="/" className="text-gray-600 font-serif hover:text-gray-900 text-xl hover:underline">Início</Link>
                </li>
                <li>
                    <Link href="/about" className="text-gray-600 font-serif hover:text-gray-900 text-xl hover:underline">Sobre</Link>
                </li>
                <li>
                    <Link href="/report" className="text-gray-600 font-serif hover:text-gray-900 text-xl hover:underline">Relatar</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-gray-600 font-serif hover:text-gray-900 text-xl hover:underline">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
