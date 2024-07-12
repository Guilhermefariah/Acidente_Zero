import React, { useState, useRef, useEffect, } from "react";
import { FiBell, FiUser } from "react-icons/fi";

const UserMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", clickOutside);

        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="relative flex items-center space-x-4">
            <button aria-label="Notification" className="relative">
                <FiBell size={30} className="text-gray-600" />
                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"> </span>
            </button>
            <div ref={menuRef} className="relative flex items-center">
                <button onClick={toggleMenu} className="flex items-center space-x-2 focus:outline-none" aria-label="User Menu">
                    <FiUser size={30} className="text-gray-600" />
                    <span className="hidden md:block">Perfil</span>
                </button>
                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-200 rounded-md shadow-lg py-0 flex flex-col">
                        <a href="/profie" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Perfil</a>
                        <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Configuração</a>
                        <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Sair</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserMenu;
