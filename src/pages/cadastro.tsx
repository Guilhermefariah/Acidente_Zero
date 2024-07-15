import React from "react";

const Cadastro = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Página de Cadastro</h1>
            {/* Formulário de cadastro */}
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Digite seu nome"
                    />
                </div>
                {/* Adicionar mais Campos */}
                <div className="flex items-center justify-end mt-4">
                    <button
                        type="submit"
                        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
