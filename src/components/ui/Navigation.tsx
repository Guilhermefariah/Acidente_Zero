import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navClass = {
    container: 'flex flex-col md:flex-row items-start mt-2 md:mt-0',
    menuItem: 'text-gray-300 font-serif hover:text-orange-400 text-xl hover:underline',
    menuItemActive: 'text-orange-400 font-serif text-xl',
}

export const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeMenuItem, setActiveMenuItem] = useState('')

    const clickMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleMenuItemClick = (menuItem: string) => {
        setActiveMenuItem(menuItem)
    }

    return (
        <>
            <div className="md:hidden flex justify-end w-full p-2">
                <button onClick={clickMenu}>
                    {isOpen ? (
                        <Image src="/img/close.png" alt="Close Menu" width={30} height={30} />
                    ) : (
                        <Image src="/img/menu.png" alt="Open Menu" width={30} height={30} />
                    )}
                </button>
            </div>
            <div
                className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden'
                    } md:flex`}
            >
                <Link
                    href="/"
                    className={`${navClass.menuItem} ${activeMenuItem === 'inicio' ? navClass.menuItemActive : ''
                        }`}
                    onClick={() => handleMenuItemClick('inicio')}
                >
                    Início
                </Link>
                <Link
                    href="/Header/About/About"
                    className={`${navClass.menuItem} ${activeMenuItem === 'sobre' ? navClass.menuItemActive : ''
                        }`}
                    onClick={() => handleMenuItemClick('sobre')}
                >
                    Sobre
                </Link>
                <Link
                    href="/Header/Report/Report"
                    className={`${navClass.menuItem} ${activeMenuItem === 'relatar' ? navClass.menuItemActive : ''
                        }`}
                    onClick={() => handleMenuItemClick('relatar')}
                >
                    Relatar
                </Link>
                <Link
                    href="/Header/Register/Register"
                    className={`${navClass.menuItem} ${activeMenuItem === 'cadastro' ? navClass.menuItemActive : ''
                        }`}
                    onClick={() => handleMenuItemClick('cadastro')}
                >
                    Cadastro
                </Link>
            </div>
        </>
    )
}