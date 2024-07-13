import React, {ReactNode} from "react";

interface ModalProps {
    title: string;
    onClose: () => void;
    onConfirm: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, onConfirm, children }) => {
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-gray-200 hover:bg-gray-100 p-8 rounded-lg max-w-md">
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <div className="mb-4">{children}</div>
                <div className="flex justify-end">
                    <button
                        className="bg-gray-200 text-gray-800 py-2 px-4 rounded mr-4 hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600"
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