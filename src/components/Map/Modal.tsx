import React from 'react'
import { ModalProps } from '@/models/Map/ModalProps'

export const Modal: React.FC<ModalProps> = ({ title, onClose, onConfirm, children }) => {
    return (
        <div className='fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50'>
            <div className='bg-white p-8 rounded-lg max-w-md shadow-lg'>
                <h2 className='text-lg font-semibold mb-4 text-gray-800'>{title}</h2>
                <div className='mb-4 text-gray-700'>{children}</div>
                <div className='flex justify-end gap-2'>
                    <button
                        className='bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition duration-300 ease-in-out'
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className='bg-gray-600 text-gray-300 py-2 px-4 rounded hover:bg-gray-500 transition duration-300 ease-in-out'
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}
