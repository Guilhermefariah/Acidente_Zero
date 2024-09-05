import React, { useState } from 'react'
import Link from 'next/link'
import { routes } from '@/routes/Header/Menu'

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full'>
      <button
        onClick={isMenuOpen}
        className='w-full flex justify-between items-center bg-gray-800 px-4 py-2 text-left text-3xl text-white font-serif hover:bg-gray-700 focus:outline-none md:hidden'
      >
        Menu
      </button>
      <div className={`flex-col md:flex md:flex-row md:justify-between items-start bg-gray-800 md:bg-transparent space-y-4 md:space-y-0 md:space-x-4 py-4 md:py-0 ${isOpen ? 'flex' : 'hidden'}`}>
        {Object.keys(routes).map((key, index) => (
          <Link key={index} href={routes[key as keyof typeof routes]} className='block text-white font-serif hover:text-orange-400 text-2xl p-2 hover:underline'>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  )
}
