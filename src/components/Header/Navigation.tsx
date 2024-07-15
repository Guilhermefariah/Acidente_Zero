import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const clickMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex flex-col md:flex-row items-start mt-2 md:mt-0">
            <div className="md:hidden flex justify-end w-full p-2">
                <button onClick={clickMenu}>
                    {isOpen ? (
                        <Image src="/img/close.png" alt="Close Menu" width={30} height={30} />
                    ) : (
                        <Image src="/img/menu.png" alt="Open Menu" width={30} height={30} />
                    )}
                </button>
            </div>
            <ul className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                {['Início', 'Sobre', 'Relatar', 'Cadastro'].map((item, index) => (
                    <li key={index}>
                        <Link href={`/${item}`} className="text-gray-600 font-serif hover:text-gray-900 text-2xl hover:underline">
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
