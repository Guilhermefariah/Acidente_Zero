import { useState } from 'react'
import Link from 'next/link'

const menuClasses = {
  container: 'w-full',
  button: 'w-full flex justify-between items-center bg-gray-800 px-4 py-2 text-left text-3xl text-gray-300 font-serif hover:bg-gray-700 focus:outline-none md:hidden',
  links: 'block text-gray-300 font-serif hover:text-orange-400 text-2xl p-2 hover:underline',
  menuContainer: 'flex-col md:flex md:flex-row md:justify-between items-start bg-gray-800 md:bg-transparent space-y-4 md:space-y-0 md:space-x-4 py-4 md:py-0'
}

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        onClick={isMenuOpen}
        className={menuClasses.button}
      >
        Menu
      </button>
      <div className={`${menuClasses.menuContainer} ${isOpen ? 'flex' : 'hidden'}`}>
        <Link href='/Header/Menu/Support' className={menuClasses.links}>
          Apoio
        </Link>
        <Link href='/Header/Menu/Events' className={menuClasses.links}>
          Eventos
        </Link>
        <Link href='/Header/Menu/News' className={menuClasses.links}>
          Novidades
        </Link>
      </div>
    </>
  )
}
