import React, { useState } from "react";
import Link from "next/link";

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMenuOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="w-full">
            <button
                onClick={isMenuOpen}
                className="w-full flex justify-between items-centerbg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 px-4 py-2 text-left text-3xl text-gray-700 font-serif hover:from-gray-400 hover:to-gray-600 focus:outline-none md:hidden"
            >
                Menu
            </button>
            <div className={`flex-col md:flex md:flex-row md:justify-between items-start bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 md:bg-transparent space-y-4 md:space-y-0 md:space-x-4 py-4 md:py-0 ${isOpen ? 'flex' : 'hidden'}`}>
                {['Apoio', 'Eventos', 'Novidades'].map((item, index) => (
                    <Link key={index} href={`/${item.toLowerCase()}`} className="block text-gray-700 font-serif hover:text-gray-600 text-2xl p-2 hover:underline">
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Menu;
