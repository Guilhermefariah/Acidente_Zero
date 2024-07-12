import React from "react";
import Image from "next/image";

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
            <span className="font-serif text-gray-600">Guilherme Faria</span>
        </div>
    );
}

export default UserMenu;
