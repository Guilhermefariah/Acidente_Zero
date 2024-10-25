import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const userMenuClass = {
    container: 'relative flex items-center space-x-4',
    image: 'text-gray-600',
    span: 'absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full',
    button: 'flex items-center space-x-2 focus:outline-none',
    menu: 'absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-0 flex flex-col',
    links: 'block px-4 py-2 text-gray-300 hover:bg-gray-700',
    buttons: 'block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700'
}


export const UserMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const clickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', clickOutside)

        return () => {
            document.removeEventListener('mousedown', clickOutside)
        }
    }, [])

    const clickMenu = useCallback(() => {
        setMenuOpen(prev => !prev)
    }, [])

    return (
        <>
            <button
                aria-label='Notification'
                className='relative'>
                <Image
                    src='/img/notification.png'
                    alt='Notification'
                    width={35}
                    height={35}
                    className={userMenuClass.image}
                />
                <span className={userMenuClass.span}></span>
            </button>
            <div ref={menuRef}
                className='relative flex items-center'>
                <button onClick={clickMenu}
                    className={userMenuClass.button}
                    aria-label='User Menu'>
                    <Image
                        src='/img/user-icon.png'
                        alt='User'
                        width={35}
                        height={35}
                        className={userMenuClass.image}
                    />
                </button>
                {menuOpen && (
                    <div
                        className={userMenuClass.menu}>
                        <Link href='/profile'
                            className={userMenuClass.links}>
                            Perfil
                        </Link>
                        <Link href='/profile'
                            className={userMenuClass.links}>
                            Configurações
                        </Link>
                        <button
                            className={userMenuClass.buttons}
                        >Sair
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
