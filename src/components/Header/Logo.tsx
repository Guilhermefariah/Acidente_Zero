import React from "react"
import Image from "next/image"

const Logo: React.FC = () => {
    return (
        <Image
            src="/img/logo.png"
            alt="Logo"
            width={20}
            height={20}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
    )
}

export default Logo
