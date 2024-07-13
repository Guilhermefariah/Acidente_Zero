import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <div className="flex items-center">
            <Image
                src="/img/logo.png"
                alt="Logo"
                width={20}
                height={20}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
            />
        </div>
    );
}

export default Logo;
