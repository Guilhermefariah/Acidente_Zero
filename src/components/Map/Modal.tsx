import React, { ReactNode } from 'react'

interface ModalProps {
    title: string
    onClose: () => void
    onConfirm: () => void
    children: ReactNode
}

const modalClasses = {
    overlay: 'fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50',
    container: 'bg-white p-8 rounded-lg max-w-md shadow-lg',
    title: 'text-lg font-semibold mb-4 text-gray-800',
    content: 'mb-4 text-gray-700',
    buttonContainer: 'flex justify-end gap-2',
    cancelButton: 'bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition duration-300 ease-in-out',
    confirmButton: 'bg-gray-600 text-gray-300 py-2 px-4 rounded hover:bg-gray-500 transition duration-300 ease-in-out',
}

export const Modal: React.FC<ModalProps> = ({ title, onClose, onConfirm, children }) => {
    return (
        <div className={modalClasses.overlay}>
            <div className={modalClasses.container}>
                <h2 className={modalClasses.title}>{title}</h2>
                <div className={modalClasses.content}>{children}</div>
                <div className={modalClasses.buttonContainer}>
                    <button className={modalClasses.cancelButton} onClick={onClose}>
                        Cancelar
                    </button>
                    <button className={modalClasses.confirmButton} onClick={onConfirm}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}
