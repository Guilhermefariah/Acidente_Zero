import React, { ReactNode } from "react";

interface ModalProps {
    title: string;
    onClose: () => void;
    onConfirm: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, onConfirm, children }) => {
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-md shadow-lg">
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <div className="mb-4">{children}</div>
                <div className="flex justify-end">
                    <button
                        className="bg-gradient-to-r from-gray-300 to-gray-400 text-white py-2 px-4 rounded mr-4 hover:from-gray-200 hover:to-gray-400"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-gradient-to-r from-gray-400 to-gray-800 text-white py-2 px-4 rounded hover:from-gray-400 hover:to-gray-600"
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
