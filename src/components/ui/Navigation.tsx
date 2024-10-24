import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const clickMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='flex flex-col md:flex-row items-start mt-2 md:mt-0'>
            <div className='md:hidden flex justify-end w-full p-2'>
                <button onClick={clickMenu}>
                    {isOpen ? (
                        <Image src='/img/close.png' alt='Close Menu' width={30} height={30} />
                    ) : (
                        <Image src='/img/menu.png' alt='Open Menu' width={30} height={30} />
                    )}
                </button>
            </div>
            <div className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                <Link href="/" className="text-gray-300 font-serif hover:text-orange-400 text-xl hover:underline">Início</Link>
                <Link href="/Header/About/About" className="text-gray-300 font-serif hover:text-orange-400 text-xl hover:underline">Sobre</Link>
                <Link href="/Header/Report/Report" className="text-gray-300 font-serif hover:text-orange-400 text-xl hover:underline">Relatar</Link>
                <Link href="/Header/Register/Register" className="text-gray-300 font-serif hover:text-orange-400 text-xl hover:underline">Cadastro</Link>
            </div>
        </nav >
    )
}
