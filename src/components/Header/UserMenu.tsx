import React from "react";
import Image from "next/image";
import { FiBell, FiUser } from "react-icons/fi";

const UserMenu: React.FC = () => {
    return (
        <div className="relative flex items-center space-x-4">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                    src="/img/avatar.png"
                    alt="User Avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            <span className="font-serif text-gray-600 text-base">Guilherme Faria</span>
            <button aria-label="Notification" className="relative">
                <FiBell size={30} className="text-gray-600" />
                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"> </span>
            </button>
            <div className="relative flex items-center">
                <button className="flex items-center space-x-2 focus:outline-none" aria-label="User Menu">
                    <FiUser size={30} className="text-gray-600" />
                    <span className="hidden md:block">Perfil</span>
                </button>
            </div>
        </div>
    );
}

export default UserMenu;
