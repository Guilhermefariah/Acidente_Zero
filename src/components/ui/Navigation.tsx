import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { routes } from '@/routes/Header/Navigation/Navigation'

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
            <ul className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                {Object.keys(routes).map((key, index) => (
                    <li key={index}>
                        <Link href={routes[key as keyof typeof routes]} className='text-gray-300 font-serif hover:text-orange-400 text-xl hover:underline'>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
