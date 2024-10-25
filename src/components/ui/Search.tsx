import React, { useRef } from 'react'
import Image from 'next/image'

const searchClass = {
    container: 'relative flex items-center',
    input: 'px-2 py-2 pl-10 border text-xl text-gray-300 border-gray-700 bg-gray-900 rounded-md focus:outline-none focus:border-gray-600 w-full md:w-auto',
    button: 'absolute left-0 top-0 h-full flex items-center pl-2 text-gray-300'
}

export const Search: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const iconClick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <>
            <div className={searchClass.container}>
                <input
                    type='text'
                    placeholder='Pesquisar...'
                    ref={inputRef}
                    className={searchClass.input}
                />
                <button
                    type='button'
                    onClick={iconClick}
                    className={searchClass.button}
                >
                    <Image src='/img/search.png' alt='Search' width={25} height={25} />
                </button>
            </div >
        </>
    )
}
