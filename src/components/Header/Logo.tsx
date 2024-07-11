import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
    return (
        <div className="flex items-center">
            <Image 
                src="/img/logo.png" 
                alt="Acidente Zero" 
                width={50} 
                height={50} 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
        </div>
    );
}

export default Logo;
