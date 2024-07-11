import React, { useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="w-full">
            <button
                onClick={toggleMenu}
                className="w-full flex justify-between items-center bg-gray-200 px-4 py-2 text-left text-gray-600 font-serif hover:text-gray-900 focus:outline-none focus:bg-gray-300"
            >
                Menu
            </button>
            {isOpen && (
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start bg-gray-100 space-y-4 md:space-y-0 md:space-x-4 py-4">
                    <Link href="/Novidades" className="text-gray-600 font-serif hover:text-gray-900">Novidades</Link>
                    <Link href="/Eventos" className="text-gray-600 font-serif hover:text-gray-900">Eventos</Link>
                    <Link href="/Apoio" className="text-gray-600 font-serif hover:text-gray-900">Apoio</Link>
                    <div className="flex space-x-4">
                        <a href="https://github.com/Guilhermefariah" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <FiGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/-guilherme-faria/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                            <FiLinkedin size={24} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
