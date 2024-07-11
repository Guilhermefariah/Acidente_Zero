import React from "react";
import Image from "next/image";


const Logo: React.FC = () => {
    return (
        <div className="flex items-center">
            <Image src="/img/logo.png" alt="Acidente Zero" width={50} height={50} />
        </div>
    );
}

export default Logo;
